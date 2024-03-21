import { PropsWithChildren } from "react";
import Navigation, { Page } from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

type LayoutProps = {
	pages: Page[];
};

export default function Layout({ children, pages }: PropsWithChildren<LayoutProps>) {
	return (
		<div className="py-4 pr-4">
			<Navigation menu={pages} />
			<div className="rounded-3xl ml-[15rem] bg-gray-5">
				{children}
				<Footer />
			</div>
		</div>
	);
}
