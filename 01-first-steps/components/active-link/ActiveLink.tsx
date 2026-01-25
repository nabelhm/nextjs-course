'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link 
            className={`${style.link} ${isActive ? style['active-link'] : ''}`}
            href={path}
        >
            {text}
        </Link>
    );
}