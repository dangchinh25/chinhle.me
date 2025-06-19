import "./globals.css";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import { OuterContainer } from "@/components/OuterContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chinh D. Le",
    icons: {
        icon: "/favicon.svg",
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body
                className={`${inter.className} bg-notion-bg-secondary text-notion-text font-notion`}
            >
                <OuterContainer>{children}</OuterContainer>
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
