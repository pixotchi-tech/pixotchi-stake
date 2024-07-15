
import type { Metadata } from "next";
import "./globals.scss";
import "./custom-nes-ui.scss"
import { cn } from "@/lib/utils";
import Providers from "./providers";
import localFont from 'next/font/local';
//import { IBM_Plex_Mono } from 'next/font/google';

/*
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
*/

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
        "min-h-screen bg-background antialiased nes-ui",
        /*fontHeading.variable,
        fontBody.variable,*/
          pixelMix.className,
      )}>

      <Providers>{children}</Providers>

      </body>
    </html>
  );
}
