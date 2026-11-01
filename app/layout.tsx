/* eslint-disable sort-imports */
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import "./globals.css";
import "./radix-colors.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heilige Maagden",
  description: "Official website of Heilige Maagden.",
  robots: "noindex",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Theme
              accentColor="yellow"
              grayColor="gray"
              appearance="inherit"
              radius="small"
              className="bg-[#222222]"
            >
              {children}
            </Theme>
          </ThemeProvider>
        </body>
    </html>
  );
}
