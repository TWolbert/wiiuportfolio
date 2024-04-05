import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "TeunW U",
  description: "A Wii U inspired portfolio",
};

const WiiUFont = localFont({
  src: [
    {
      path: '../public/fonts/WiiU.otf',
      weight: '700'
    }
  ],
  variable: '--font-wiiu', 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={WiiUFont.className}>{children}</body>
    </html>
  );
}
