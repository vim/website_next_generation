import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ContentSection from "@/components/Sections/ContentSection";

    type Section = {
        id:number,
        __component:string
        title?:string,
        description?:string,
        buttonTitle?:string
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
    console.log(singleTypeComponentHomeData)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {Object.keys(singleTypeComponentHomeData).map((key) => {
                const component = singleTypeComponentHomeData[key]
                switch(key){
                    case 'welcome-section':
                        return (
                            <div key={key} className="flex flex-col items-center justify-center h-screen">
                                <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col justify-end">
                                        <ContentSection title={component.title} description={component.description}/>
                                    </div>
                                    <div className="flex justify-end items-end">
                                        <ButtonPrimary>{component.buttonTitle}</ButtonPrimary>
                                    </div>
                                </div>
                            </div>)
                    case 'about-vim-section':
                        return(
                            <div key = {key}>
                                <ContentSection title={component.title} description={component.description}/>
                            </div>
                        )
                }
            })}
        </main>
    );
}
