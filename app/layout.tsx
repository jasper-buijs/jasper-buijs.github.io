import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProviderClient from "@/app/components/SessionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heilige Maagden",
  description: "Official website of Heilige Maagden.",
  robots: "noindex",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
        <body className={inter.className}>
        <SessionProviderClient session={session}>
          {children}
        </SessionProviderClient>
        </body>
    </html>
  );
}
