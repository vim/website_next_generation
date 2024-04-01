import { TextListItem } from "@/types/strapi";

type ListProps = {
	list: TextListItem[];
};

export default async function List({ list }: ListProps) {
	console.log(list);
	return (
		<ul className="list">
			{list.map(item => {
				return (
					<li key={item.id}>
						<span>{item.item}</span>
					</li>
				);
			})}
		</ul>
	);
}
