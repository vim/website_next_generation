import { Content } from "@/types/page";
import Plain from "../Plain/Plain";
import { Carousel } from "../Card/Carousel";
import Card from "../Card/Card";

type ContentEntryProps = {
	entry: Content;
};
export async function ContentEntry({ entry }: ContentEntryProps) {
	const renderContent = () => {
		switch (entry.type) {
			case "Card":
				return <Card content={{ headline: entry.headline, description: entry.description }} />;
			case "Accordion":
				return <Carousel />;
			default:
				return <Plain content={{ headline: entry.headline, description: entry.description }} />;
		}
	};

	return <> {renderContent()}</>;
}
