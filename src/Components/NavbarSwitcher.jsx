"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Components/pagesComponent/Navbar";

export default function NavbarSwitcher() {
  const pathname = usePathname();

  // Hide navbar on /booking and /dashboard
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/booking"))
    return null;

  return <Navbar />;
}
