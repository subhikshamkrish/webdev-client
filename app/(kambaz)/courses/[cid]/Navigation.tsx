"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const LINKS = [["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"], ["zoom", "Zoom"], ["assignments", "Assignments"], ["quizzes", "Quizzes"], ["grades", "Grades"], ["people/table", "People"], ["announcements", "Announcements"], ["home", "Sample"]];
  return (
    <nav id="wd-courses-navigation" aria-label="Course" className="wd list-group rounded-none text-lg">
      {LINKS.map(([route, label]) => {
        const href = `/courses/${cid}/${route}`;
        const active = label !== "Sample" && (pathname === href || pathname.startsWith(href + "/"));
        return <Link key={label} href={href} id={`wd-course-${label.toLowerCase()}-link`} aria-current={active ? "page" : undefined} className={`list-group-item border-0 ${active ? "active" : "text-red-600"}`}>{label}</Link>;
      })}
    </nav>
  );
}
