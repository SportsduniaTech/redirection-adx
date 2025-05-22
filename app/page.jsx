import { redirect } from 'next/navigation';

export default function HomePage({ searchParams }) {
  const encodedRedirectUrl = searchParams?.redirectUrl;

  if (typeof encodedRedirectUrl === 'string' && encodedRedirectUrl.trim() !== '') {
    let decodedRedirectUrl;
    
    try {
      // Only attempt to decode here
      decodedRedirectUrl = decodeURIComponent(encodedRedirectUrl);
    } catch (decodingError) {
      // Log only if decoding fails
      console.error("Error decoding redirect URL:", decodingError);
      // decodedRedirectUrl will remain undefined
    }

    // Redirect is outside the try-catch block
    if (decodedRedirectUrl) {
      redirect(decodedRedirectUrl); // This throws NEXT_REDIRECT, handled by Next.js
    }
  }

  // This content is rendered if no valid redirectUrl is found, decoding fails, or redirectUrl is empty.
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