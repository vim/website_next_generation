import { PropsWithChildren } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <div className="bg-slate-700">
            <Navigation />
            <div className="w-[78vw]">
                {children}
                <Footer />
            </div>
        </div>
    );
}
