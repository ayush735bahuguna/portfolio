import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const manRopeFont = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush0portfolio.vercel.app"),
  title: {
    default: "Ayush Bahuguna | Full-Stack Developer",
    template: "%s | Ayush Bahuguna",
  },
  description:
    "Hi there! I'm Ayush (he/him), a full-stack developer based out of India. I'm self-taught, always keen to make dynamic & functional websites! Drop a hello & let's build a fantastic website together!",
  keywords: [
    "Ayush Bahuguna",
    "Ayush", 
    "Overshare",
    "Overshare App",
    "Splitzy",
    "Splitzy App",
    "Full-Stack Developer",
    "React Native",
    "Next.js",
    "Node.js",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Bahuguna", url: "http://ayush0portfolio.vercel.app" }],
  creator: "Ayush Bahuguna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://ayush0portfolio.vercel.app",
    title: "Ayush Bahuguna | Full-Stack Developer",
    description:
      "Hi there! I'm Ayush (he/him), a full-stack developer based out of India. Check out my projects and skills.",
    siteName: "Ayush Bahuguna Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Ayush Bahuguna Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Bahuguna | Full-Stack Developer",
    description:
      "Hi there! I'm Ayush (he/him), a full-stack developer based out of India. Check out my projects and skills.",
    images: ["/og-image.jpg"], 
    creator: "@Ayush__Bahuguna",
  },
  verification: {
    google: "r0Pvd8yd6-X9oVjOgtMP66aZjtU0zg9LV_4mf_0Oyn4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Bahuguna",
  url: "http://ayush0portfolio.vercel.app",
  sameAs: [
    "https://github.com/ayush735bahuguna",
    "https://www.linkedin.com/in/ayushbahuguna",
    "https://www.instagram.com/ayush.bahuguna.a?igsh=emw1bzFvZGZiZ3dm",
  ],
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: ["React Native", "Next.js", "Full-Stack Development", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manRopeFont.className} antialiased`}>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
