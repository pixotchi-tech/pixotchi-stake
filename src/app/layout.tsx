
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import localFont from 'next/font/local';


const pixelMix = localFont({ src: './../../public/fonts/pixelmix.ttf',
    display: 'swap',
    style: 'normal',
    weight: '600',

})

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
        /*fontHeading.variable,
        fontBody.variable,*/
          pixelMix.className,
      )}>

      <Providers>{children}</Providers>

      </body>
    </html>
  );
}
