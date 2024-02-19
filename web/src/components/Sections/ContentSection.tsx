
type ContentSectionProps = {
    headline?: string;
    description?: string;
  };

export default function ContentSection({ headline, description }:ContentSectionProps){
    return(<>
      <h2 className="mb-4">{headline}</h2>
      <p>{description}</p>
    </>) 
}