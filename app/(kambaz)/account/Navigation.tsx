"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav id="wd-account-navigation" aria-label="Account" className="wd list-group text-lg">
      {[["signin", "Signin"], ["signup", "Signup"], ["profile", "Profile"]].map(([route, label]) => <Link key={route} href={`/account/${route}`} aria-current={pathname.endsWith(route) ? "page" : undefined} className={`list-group-item ${pathname.endsWith(route) ? "active" : ""}`}>{label}</Link>)}
    </nav>
  );
}
