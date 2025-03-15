import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

// Add this meta tag for theme-color
const themeColorMetaTag = (
  <meta name="theme-color" content="#000000" />
);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KuhnAI",
  description: "KuhnAI - streamlining business processes with AI",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
