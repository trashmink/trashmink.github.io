import '@/app/globals.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div className="title-page h-screen flex justify-center items-center">
            <Link href='/illustration' className="text-6xl font-bold">
                <span className="pr-6">Hi, I&apos;m Mink</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
}
