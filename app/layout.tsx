import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Breezy Weather",
    description: "Simple Web Application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="bg-ocean-900 text-ocean-50" lang="en">
            <body className={sora.className}>{children}</body>
        </html>
    );
}
