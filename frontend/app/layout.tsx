import type { Metadata } from "next";
import Script from "next/script";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. NEURONWORKS INDONESIA",
  description: "PT. NEURONWORKS INDONESIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0G0YN6S4ZT"
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0G0YN6S4ZT');
        `}
      </Script>
    </html>
  );
}
