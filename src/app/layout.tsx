import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/tailwind.css";
import { RootLayout } from "@/src/components/RootLayout";

const siteSans = localFont({
  src: "../../public/fonts/noto-sans-latin-regular.ttf",
  display: "swap",
});

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
      <body className={siteSans.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
