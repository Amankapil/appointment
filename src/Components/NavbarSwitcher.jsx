"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Components/pagesComponent/Navbar";
import Navbar1 from "../app/dashboard/page";

export default function NavbarSwitcher() {
  const pathname = usePathname();
  return pathname.startsWith("/dashboard") ? "" : <Navbar />;
}
