import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { themeOverride } from "@/lib/theme-override";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const theme = createTheme(themeOverride);

export const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "TourMate",
    description: "Go to world's end and beyond",
    icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>

            <body className={`antialiased font-sans ${sora.variable}`}>
                <MantineProvider
                    theme={theme}
                    defaultColorScheme="light">
                    <Header className="px-4 sm:px-8 max-w-7xl mx-auto" />
                    {children}
                    <Footer className="px-4 sm:px-8 max-w-7xl mx-auto" />
                </MantineProvider>
            </body>
        </html>
    );
}
