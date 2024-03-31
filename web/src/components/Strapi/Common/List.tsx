import { ListItem } from "@/types/strapi";

type ListProps = {
	items: ListItem[];
};

export default function List({ items }: ListProps) {
	return (
		<ul className="list">
			{items.map(item => {
				return (
					<li key={item.id}>
						<span>{item.item}</span>
					</li>
				);
			})}
		</ul>
	);
}
