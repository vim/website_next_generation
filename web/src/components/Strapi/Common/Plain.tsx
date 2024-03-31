import Markdown from "react-markdown";
import { CTA } from "@/types/strapi";

type PlainProps = {
	headline: string;
	text?: string;
	cta?: CTA;
};

export default function Plain({ headline, text, cta }: PlainProps) {
	return (
		<div>
			<h2 className="h2-prefix">{headline}</h2>
			{text && <Markdown className="markdown">{text}</Markdown>}
			{cta && <p>Here comes the button</p>}
		</div>
	);
}
