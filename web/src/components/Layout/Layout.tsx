import { PropsWithChildren } from "react";
import Navigation, { Page } from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

type LayoutProps = {
	pages: Page[];
};

export default function Layout({ children, pages }: PropsWithChildren<LayoutProps>) {
	return (
		<div className="relative grid grid-cols-[1fr,3fr] gap-x-5 px-5 xl:grid-cols-[300px,auto]">
			<div className="sticky top-0 h-screen py-4">
				<Navigation menu={pages} />
			</div>
			<div className="pt-4">
				<div className="rounded p-12 bg-gray-5">
					{children}
					<Footer />
				</div>
			</div>
		</div>
	);
}
