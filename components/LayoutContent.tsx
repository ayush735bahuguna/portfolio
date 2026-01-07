"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPrivacyRoute = pathname?.toLowerCase().startsWith("/privacy");

  return (
    <div className="max-w-7xl mx-auto">
      {!isPrivacyRoute && <Navbar />}
      {children}
      {!isPrivacyRoute && <Footer />}
    </div>
  );
}
