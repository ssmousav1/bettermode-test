import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Bettermode",
  description: "Generated by Soby",
  icons: [{ rel: "icon", url: "https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/668d8956f4d5ad34247b1a5f_Resized%20Logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
