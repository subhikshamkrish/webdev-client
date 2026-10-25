import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as db from "../../database";
import { notFound } from "next/navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  const course = db.courses.find((course) => course._id === cid);
  if (!course) notFound();
  return (
    <div id="wd-courses">
      <h2 className="text-red-600"><Breadcrumb course={course} /> <small>({course._id})</small></h2>
      <hr />
      <div className="flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
