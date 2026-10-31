/* eslint-disable sort-imports */
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./radix-colors.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heilige Maagden",
  description: "Official website of Heilige Maagden.",
  robots: "noindex",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Theme
            accentColor="yellow"
            grayColor="gray"
            appearance="inherit"
            radius="large"
          >
            {children}
          </Theme>
        </body>
    </html>
  );
}
