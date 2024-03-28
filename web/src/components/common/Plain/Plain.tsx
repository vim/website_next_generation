import { SingleElementSection } from "@/types/section";

type PlainProps = {
	content: SingleElementSection;
};

export default function Plain({ content }: PlainProps) {
	return (
		<div>
			<h2 className="h2-prefix">{content.headline}</h2>
			{content.description && <p className="paragraph">{content.description}</p>}
			{content.button && <p>Here comes the button</p>}
		</div>
	);
}
