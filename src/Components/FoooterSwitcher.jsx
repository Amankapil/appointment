"use client";

import { usePathname } from "next/navigation";
import Footer from "./pagesComponent/Footer";

export default function FoooterSwitcher() {
  const pathname = usePathname();

  // Hide navbar on /booking and /dashboard
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/booking"))
    return null;

  return <Footer />;
}
