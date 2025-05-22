'use client'; // Make it a client component
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
  const searchParams = useSearchParams();
  const encodedRedirectUrl = searchParams.get('redirectUrl');
  const redirectUrl = encodedRedirectUrl ? decodeURIComponent(encodedRedirectUrl) : null;

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 to-blue-800 text-white p-6 relative">
      <header className="text-center mb-10">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Our Ad Agency!</h1>
        <p className="text-2xl">Enhancing your brand visibility with creative ad solutions.</p>
      </header>
      <section className="text-center space-y-4">
        <p className="text-xl font-semibold">Connecting brands with the right audience.</p>
      </section>
      <footer className="absolute bottom-4 text-sm text-white/70">
        &copy; {new Date().getFullYear()} adXinternet. All rights reserved.
      </footer>
    </div>
  );
}
