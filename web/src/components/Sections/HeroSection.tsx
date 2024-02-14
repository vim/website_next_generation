
type HeroSectionProps = {
    headline?: string;
    listItems?: {item:string,id:number}[];
  };

export default function ContentSection({ headline, listItems }:HeroSectionProps){
    return(<>
      <h2 className="mb-4">{headline}</h2>
      {
        listItems?.map((item, index) => {
          return <p key={index}>{item.item}</p>
        })
      }
    </>) 
}