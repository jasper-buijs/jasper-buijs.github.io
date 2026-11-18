/* eslint-disable sort-imports */
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import "./radix-colors.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Heilige Maagden",
  description: "Official website of Heilige Maagden.",
  robots: "noindex",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={nunitoSans.variable}>
        <body>
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
