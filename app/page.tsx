import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function HomePage({ searchParams } : PageProps) {
    const redirectUrl = searchParams?.redirectUrl;

    if (typeof redirectUrl == 'string') {
        redirect(redirectUrl);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 to-blue-800 text-white p-6">
            <header className="text-center mb-10">
                <h1 className="text-6xl font-extrabold mb-4">Welcome to Our Ad Agency!</h1>
                <p className="text-2xl">Enhancing your brand visibility with creative ad solutions.</p>
            </header>

            <section className="text-center space-y-4">
                <p className="text-xl font-semibold">Connecting brands with the right audience.</p>
            </section>

            <footer className="absolute bottom-4 text-sm text-white/70">&copy; {new Date().getFullYear()} adXinternet. All rights reserved.</footer>
        </div>
    );
}

export const dynamic = 'force-dynamic';