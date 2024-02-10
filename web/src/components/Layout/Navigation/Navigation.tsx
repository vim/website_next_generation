import { IconUserCircle } from '@tabler/icons-react';

type NavigationProps = {
    pages: Page[];
};
export type Page = {
    id: number;
    attributes: {
        PageTitle: string;
        locale: 'en';
        visible: boolean;
    };
};

export default function Navigation({ pages }: NavigationProps) {
    return (
        <header className="h-screen w-[20vw] bg-slate-900 p-4 rounded-2xl fixed left-0 top-0 border border-zinc-500">
            <nav>
                <a href="/">
                    <img src="/vim.svg" alt="Vim Logo" />
                </a>
                <ul>
                    {pages.map((page) => {
                        return page.attributes.visible ? (
                            <li key={page.id}>
                                <a href={`/${page.attributes.PageTitle.toLowerCase()}`}>{page.attributes.PageTitle}</a>
                            </li>
                        ) : null;
                    })}
                </ul>

                <div>
                    <a href="/my-account">
                        <IconUserCircle size={24} />
                        My Account
                    </a>
                </div>
            </nav>
        </header>
    );
}
