import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const manrope = Manrope({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Opal",
  description: "share AI powered videos with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ClerkProvider>
      <body
        className={`${manrope.className} bg-[#171717]`}>{children}
      </body>
    </ClerkProvider>
    </html>
  );
}
