import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
    {
        href: 'https://bsky.app/profile/trashm.ink',
        icon: faCloud,
        label: 'BlueSky',
    },
    {
        href: 'https://twitter.com/trashmink',
        icon: faTwitter,
        label: 'Twitter',
    },
    {
        href: 'https://www.instagram.com/trashmink.art',
        icon: faInstagram,
        label: 'Instagram',
    },
    {
        href: 'mailto:trashmink.art@gmail.com',
        icon: faEnvelope,
        label: 'trashmink.art@gmail.com',
    },
];

export default function Footer() {
    return (
        <footer className="flex justify-between items-center mt-auto pt-16 pb-6">
            <span>&copy; 2023 trashmink</span>
            <ul className="flex gap-2">
                {links.map(link => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="flex justify-center rounded-full bg-[#ffd3cd] hover:bg-black hover:text-white items-center h-10 w-10 object-fill"
                        >
                            <FontAwesomeIcon icon={link.icon} />
                            <span className="sr-only">{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
