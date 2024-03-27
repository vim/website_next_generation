"use client";
import Link from "next/link";
import Image from "next/image";
import { IconUserCircle } from "@tabler/icons-react";

type NavigationProps = {
	menu: Page[];
};
export type Page = {
	id: number;
	attributes: {
		title: string;
		url: string;
		locale: "en";
		visible: boolean;
	};
};

export default function Navigation({ menu }: NavigationProps) {
	return (
		<header className="h-full rounded pt-8 bg-gray-5">
			<nav className="flex flex-col items-center h-full">
				<Link className="mb-8" href="/">
					<Image src="/vim.svg" width={64} height={64} alt="Vim Logo" />
				</Link>
				<ul className="w-full flex flex-col gap-2 px-8">
					{menu.map(menuItem => {
						return (
							<li className="block rounded-sm py-2 px-4 text-white hover:bg-gray-4 hover:cursor-pointer" key={menuItem.id}>
								<Link href={`${menuItem.attributes.url}`}>{menuItem.attributes.title}</Link>
							</li>
						);
					})}
				</ul>

				<div className="group mt-auto mb-8 hover:text-gray-2">
					<Link className="flex items-center gap-2 text-white group-hover:text-gray-2" href="/my-account">
						<IconUserCircle className="text-white group-hover:text-gray-2" size={40} />
						My Account
					</Link>
				</div>
			</nav>
		</header>
	);
}
