"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"], ["zoom", "Zoom"], ["assignments", "Assignments"], ["quizzes", "Quizzes"], ["grades", "Grades"], ["people/table", "People"]];
  return (
    <nav id="wd-courses-navigation" aria-label="Course" className="wd list-group rounded-none text-lg">
      {links.map(([route, label]) => {
        const href = `/courses/${cid}/${route}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return <Link key={route} href={href} id={`wd-course-${label.toLowerCase()}-link`} aria-current={active ? "page" : undefined} className={`list-group-item border-0 ${active ? "active" : "text-red-600"}`}>{label}</Link>;
      })}
      <Link href={`/courses/${cid}/home`} id="wd-course-ai-link" className="list-group-item border-0 text-red-600">Sample</Link>
    </nav>
  );
}
