export default async function Content() {
	const renderSection = (entry: ContentEntry) => {
		switch (entry.type) {
			case "Card":
				return <Card headline={entry.headline} text={entry.description} />;
			case "Accordion":
				return (
					<Carousel>
						<h2 className="h2">{entry.headline}</h2>
						<p className="paragraph">{entry.description}</p>
					</Carousel>
				);
			default:
				return <Plain headline={entry.headline} text={entry.description} />;
		}
	};

	return <div>Content</div>;
}
