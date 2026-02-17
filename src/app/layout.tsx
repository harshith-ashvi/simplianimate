import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simplianimate.com"),
  title: {
    default: "SimpliAnimate",
    template: "%s | SimpliAnimate",
  },
  description: "Animation templates made easy & simple",
  keywords: ["SimpliAnimate", "animation", "video templates"],
  openGraph: {
    description:
      "Animation videos made simple and easy through templates. Made videos faster by using templates",
    images: [`${process.env.SUPABASE_ASSET_URL}/general/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="mt-8" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
