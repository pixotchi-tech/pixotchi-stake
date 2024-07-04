import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";

const fontHeading = IBM_Plex_Mono({
  weight: ['400'], // Add this line
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = IBM_Plex_Mono({
  weight: ['400'], // Add this line
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: "Seed Staking",
  description: "Pixotchi Seed Staking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background antialiased",
        fontHeading.variable,
        fontBody.variable
      )}>

      <Providers>{children}</Providers>

      </body>
    </html>
  );
}
