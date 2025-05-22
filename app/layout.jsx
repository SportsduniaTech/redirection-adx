// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Welcome to Our Ad Agency!",
  description: "Enhancing your brand visibility with creative ad solutions.",
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
} 