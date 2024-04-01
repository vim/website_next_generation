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
				<div className="relative rounded-t py-12 px-20 bg-gray-5">
					<span className="absolute top-[13rem] right-2 left-2 font-fira text-[12rem] md:hero-bg-text-clamp leading-[400px] text-gray-2 font-bold text-center">
						Vim
					</span>
					{children}
					<Footer />
				</div>
			</div>
		</div>
	);
}
