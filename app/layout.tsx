import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manRopeFont = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ayush Bahuguna",
  description:
    "Hi there! I'm Ayush (he/him), a full-stack developer based out of India. I'm self-taught, always keen to make dynamic & functional websites! Drop a hello & let's build a fantastic website together! ",
  verification: {
    google: "r0Pvd8yd6-X9oVjOgtMP66aZjtU0zg9LV_4mf_0Oyn4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manRopeFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
