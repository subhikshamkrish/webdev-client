"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { href: "/account", id: "wd-account-link", label: "Account", icon: FaRegCircleUser, active: pathname.startsWith("/account") },
    { href: "/dashboard", id: "wd-dashboard-link", label: "Dashboard", icon: AiOutlineDashboard, active: pathname === "/dashboard" },
    { href: "/dashboard", id: "wd-course-link", label: "Courses", icon: LiaBookSolid, active: pathname.startsWith("/courses") },
    { href: "/calendar", id: "wd-calendar-link", label: "Calendar", icon: IoCalendarOutline, active: pathname === "/calendar" },
    { href: "/inbox", id: "wd-inbox-link", label: "Inbox", icon: FaInbox, active: pathname === "/inbox" },
    { href: "/labs", id: "wd-labs-link", label: "Labs", icon: LiaCogSolid, active: false },
  ];
  return (
    <nav id="wd-kambaz-navigation" aria-label="Kambaz" className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" aria-label="Northeastern University" className="block py-3 text-center text-6xl font-bold text-red-600 no-underline">N</a>
      {links.map(({ href, id, label, icon: Icon, active }) => (
        <Link key={id} href={href} id={id} aria-current={active ? "page" : undefined} className={`block py-3 text-center text-sm no-underline ${active ? "bg-white text-red-600" : "bg-black text-white"}`}>
          <Icon aria-hidden="true" className={`inline-block text-3xl ${label === "Account" && !active ? "text-white" : "text-red-600"}`} />
          <br />{label}
        </Link>
      ))}
      <Link href="/labs" id="wd-ai-nav-help" className="block bg-black py-3 text-center text-sm text-white no-underline">
        <FaCircleQuestion aria-hidden="true" className="inline-block text-3xl text-red-600" /><br />Help
      </Link>
    </nav>
  );
}
