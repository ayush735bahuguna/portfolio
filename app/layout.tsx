import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import LayoutContent from "@/components/LayoutContent";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manRopeFont = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.siteUrl),
  title: {
    default: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: `Hi there! I'm ${PERSONAL_INFO.name} (he/him), a full-stack developer based out of India. I'm self-taught, always keen to make dynamic & functional websites! Drop a hello & let's build a fantastic website together!`,
  keywords: PERSONAL_INFO.keywords,
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.siteUrl }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PERSONAL_INFO.siteUrl,
    title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    description: `Hi there! I'm ${PERSONAL_INFO.name} (he/him), a full-stack developer based out of India. Check out my projects and skills.`,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    description: `Hi there! I'm ${PERSONAL_INFO.name} (he/him), a full-stack developer based out of India. Check out my projects and skills.`,
    images: ["/og-image.jpg"],
    creator: PERSONAL_INFO.twitter,
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
  name: PERSONAL_INFO.name,
  url: PERSONAL_INFO.siteUrl,
  sameAs: SOCIAL_LINKS.map((link) => link.url),
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsAbout: [
    "React Native",
    "Next.js",
    "Full-Stack Development",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRopeFont.className} antialiased bg-black text-white`}
      >
        <LayoutContent>{children}</LayoutContent>
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
