"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
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
	const { data: session } = useSession();

	return (
		<header className="h-full rounded pt-8 bg-gray-5">
			<nav className="flex flex-col items-center h-full">
				<Link className="mb-8" href="/">
					<Image src="/vim.svg" width={64} height={64} alt="Vim Logo" />
				</Link>
				<ul className="w-full flex flex-col gap-2 px-8">
					<li className="block rounded-sm py-2 px-4 text-white hover:bg-gray-4 hover:cursor-pointer">
						<Link href="#">Downloads</Link>
					</li>
					<li className="block rounded-sm py-2 px-4 text-white hover:bg-gray-4 hover:cursor-pointer">
						<Link href="#">Downloads</Link>
					</li>

					{menu.map(menuItem => {
						return (
							<li className="nav-link" key={menuItem.id}>
								<a href={`/${menuItem.attributes.url}`}>{menuItem.attributes.title}</a>
							</li>
						);
					})}
				</ul>

				<div className="group mt-auto mb-8 hover:text-gray-2">
					{session && <button onClick={() => signOut()}>Sign out {JSON.stringify(session.user)}</button>}
					<Link className="flex items-center gap-2 text-white group-hover:text-gray-2" href="/my-account" onClick={() => signIn()}>
						<IconUserCircle className="text-white group-hover:text-gray-2" size={40} />
						My Account
					</Link>
				</div>
			</nav>
		</header>
	);
}
