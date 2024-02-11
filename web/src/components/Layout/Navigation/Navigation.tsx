'use client';
import { IconUserCircle } from '@tabler/icons-react';

type NavigationProps = {
    menu: Page[];
};
export type Page = {
    id: number;
    attributes: {
        title: string;
        url: string;
        locale: 'en';
        visible: boolean;
    };
};

export default function Navigation({ menu }: NavigationProps) {
    console.log({ menu });

    return (
        <header className="sidebar">
            <nav className="flex flex-col items-center justify-between h-full">
                <a className="w-3/4" href="/">
                    <img src="/vim.svg" alt="Vim Logo" />
                </a>
                <ul className="w-full flex flex-col gap-2">
                    {menu.map((menuItem) => {
                        return (
                            <li className="nav-link" key={menuItem.id}>
                                <a href={`/${menuItem.attributes.url}`}>{menuItem.attributes.title}</a>
                            </li>
                        );
                    })}
                </ul>

                <div>
                    <a className="flex flex-row gap-2" href="/my-account">
                        <IconUserCircle size={24} />
                        My Account
                    </a>
                </div>
            </nav>
        </header>
    );
}
