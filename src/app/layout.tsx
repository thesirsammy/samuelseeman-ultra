import type { Metadata } from "next";
import { Funnel_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Dock from "@/components/Dock";


const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
})

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "samuelseeman",
  description: "Welcome to the Sambase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${DMSans.variable} bg-neutral-900 text-white no-scrollbar`}
      >
        <Navbar />
          
        {children}

        <Dock />
      </body>
    </html>
  );
}
