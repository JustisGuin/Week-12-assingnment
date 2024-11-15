import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} antialiased font-semibold text-text bg-background`
        }
      >
        <nav className="flex justify-around p-4 panel underline bg-teal-400 text-white">
          <Link className="text-white" href="/videos">List Videos</Link>
          <Link className="text-white" href="/videos/add">Add another Video</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}