'use client'; // Make it a client component
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const encodedRedirectUrl = searchParams.get('redirectUrl');
  const redirectUrl = encodedRedirectUrl ? decodeURIComponent(encodedRedirectUrl) : null;

  useEffect(() => {
    if (redirectUrl) {
      setLoading(true);
      router.push(redirectUrl);
    }
  }, [redirectUrl, router]);

  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 to-blue-800 text-white p-6 relative">
      {loading && (
        <div className="absolute inset-0 bg-[#000000bf] bg-opacity-50 flex flex-col items-center justify-center z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
          <p className="text-xl text-white">Going to destination...</p>
        </div>
      )}
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

      {/* Spinner styling */}
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
        }
      `}</style>
    </div>
  );
}
