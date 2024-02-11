import { PropsWithChildren } from 'react';
import Navigation, { Page } from './Navigation/Navigation';
import Footer from './Footer/Footer';

type LayoutProps = {
    pages: Page[];
};

export default function Layout({ children, pages }: PropsWithChildren<LayoutProps>) {
    return (
        <div className="bg-slate-700">
            <Navigation menu={pages} />
            <div className="ml-52">
                {children}
                <Footer />
            </div>
        </div>
    );
}
