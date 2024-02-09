
    type Section = {
        id:number,
        __component:string
        title?:string,
        description?:string,
    }

    type HomeComponents = {
        [key: string]: Omit<Section, 'id' | '__component'>;
      };

    //TODO: Unhappy with types => Change them
    async function fetchSingleTypeComponentHome(){
        const response = await fetch(`${process.env.CMS_API}/home?populate=*`)

        if(!response.ok){
            throw new Error('Fetching single type component home failed');
        }
        return response.json();
    }

    function unwrapSingleTypeComponentHome(body: Section[]): HomeComponents {
        const unwrapedComponents: HomeComponents = {};
      
        body.forEach(section => {
          const componentType = section.__component.split('.')[1];
          const { id, __component, ...rest } = section;
          unwrapedComponents[componentType] = rest;
        });
      
        return unwrapedComponents;
      }

    async function  getSingleTypeComponentHomeData(){
        const response = await fetchSingleTypeComponentHome()
         return unwrapSingleTypeComponentHome(response.data.attributes.body) 
    }

export default async function Home() {
    const singleTypeComponentHomeData = await getSingleTypeComponentHomeData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {Object.keys(singleTypeComponentHomeData).map((key) => {
                if(key ==='welcome-section'){
                    const component = singleTypeComponentHomeData[key]
                    return (<><h2 key = {key}>{component.title}</h2> 
                    <p key = {key}>{component.description}</p>
                    </>)
                }
            })}
        </main>
    );
}
