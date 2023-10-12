import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        path: '/illustration',
        label: 'Illustration',
    },
    {
        path: '/char-design',
        label: 'Character Design',
    },
    {
        path: '/merch-design',
        label: 'Merch Design',
    },
    {
        path: '/vtuber',
        label: 'VTuber Assets',
    },
];

const NavItem = ({ path, label }: { path: string; label: string; }) => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <li>
            <Link
                href={path}
                className={classNames('py-1 px-2', { active: path === pathname })}
            >
                {label}
            </Link>
        </li>
    );
};

export default function Navbar() {
    return (
        <header className="flex flex-wrap justify-between items-center py-4">
            <Link href="/">
                <h1 className="text-6xl font-bold">Mink</h1>
            </Link>
            <nav>
                <ul className="flex flex-wrap gap-4">
                    {navItems.map(item => <NavItem key={item.path} {...item} />)}
                </ul>
            </nav>
        </header>
    );
}
