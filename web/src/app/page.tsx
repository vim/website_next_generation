import qs from 'qs';
import HeroSection from "@/components/Sections/HeroSection";
import ContentSection from "@/components/Sections/ContentSection";
import Card from "@/components/Sections/Card";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";



const query = qs.stringify(
    {
        populate: ['body, body.listItems, body.cta','body.button'],
    },
    {
      encodeValuesOnly: true,
    }
  );

    type Section = {
        id:number,
        __component:string,
        headline?:string,
        listItems?: {item:string,id:number}[];
        text:string,
        cta: {id:string, text:string,type:string,url:string},
        description?:string,
        button: {id:string, text:string,type:string,url:string}
    }

    type HomeComponents = {
        [key: string]: Omit<Section, 'id' | '__component'>;
      };

    async function fetchSingleTypeComponentHome(){
        const response = await fetch(`${process.env.CMS_API}/home?${query}`)
        if(!response.ok){
            throw new Error('Fetching single type component home failed');
        }
        return response.json();
    }

    function unwrapSingleTypeComponentHome(body: Section[]): HomeComponents {
        const unwrapedComponents: HomeComponents = {};
        body.forEach(section => {
            const sectionType = section.__component.split('.')[1];
            const { id, __component, ...rest } = section;
            unwrapedComponents[sectionType+"."+id] = rest;
        });
        return unwrapedComponents;
      }

    async function  getSingleTypeComponentHomeData(){
        const response = await fetchSingleTypeComponentHome()
        return unwrapSingleTypeComponentHome(response.data.attributes.body) 
    }

export default async function Home() {
    const singleTypeComponents = await getSingleTypeComponentHomeData()    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {
                Object.keys(singleTypeComponents).map((key) => {
                    const component = singleTypeComponents[key]
                    if(key.split('.')[0]==='hero-section'){
                        return (
                            <div key={key} className="flex flex-col items-center justify-center h-screen">
                                <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col justify-end">
                                        <HeroSection headline={component.headline} listItems={component.listItems}/>
                                    </div>
                                    <div className="flex justify-end items-end">
                                        <ButtonPrimary type={component.cta.type}>{component.cta.text}</ButtonPrimary>
                                    </div>
                                </div>
                            </div>)
                    }
                    else if (key.split('.')[0]==='card' && key.split('.')[1]==='1'){
                        return(<div key={key} className="mb-32">
                                <ContentSection  headline={component.headline} description={component.description}/>
                        </div>) 
                    }
                    else if (key.split('.')[0]==='card' && key.split('.')[1]==='2'){
                        return(<div key={key} className="mb-32">
                                <Card width = {12}>
                                    <div className="flex flex-col items-start justify-between">
                                        <ContentSection headline={component.headline} description={component.description}/>
                                        <div className="self-end mt-8">
                                            <ButtonPrimary type={component.button.type}>{component.button.text}</ButtonPrimary>
                                        </div>
                                    </div>
                                </Card>
                            </div>) 
                    }
                    else if(key.split('.')[0]==='card' && key.split('.')[1]==='3'){
                        return(<div key={key} className="flex flex-col items-start justify-between">
                            <ContentSection key={key} headline={component.headline} description={component.description}/>
                            <div className="self-end mt-8">
                                <ButtonPrimary type={component.button.type}>{component.button.text}</ButtonPrimary>
                            </div>
                        </div>)
                    }
                })
            }
        </main>
    );
}
