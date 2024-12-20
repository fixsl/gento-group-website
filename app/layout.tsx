import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";
import { RootLayout } from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s - Gento Group',
    default: 'Gento Group - Home',
  },
}


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
