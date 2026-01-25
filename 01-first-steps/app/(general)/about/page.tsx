import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'Learn more about this application, its purpose, and the information we share on the About page.',
 keywords: ['About Page','Fernando','información','...'],
};

export default function AboutPage() {
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
