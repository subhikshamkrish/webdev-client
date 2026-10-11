import { FaCheckCircle, FaFileImport, FaHome, FaBullhorn, FaChartBar, FaBell, FaStream, FaCloudDownloadAlt } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
  const actions = [
    { title: "Import Existing Content", icon: FaFileImport }, { title: "Import from Commons", icon: FaCloudDownloadAlt },
    { title: "Choose Home Page", icon: FaHome }, { title: "View Course Stream", icon: FaStream },
    { title: "New Announcement", icon: FaBullhorn }, { title: "New Analytics", icon: FaChartBar }, { title: "View Course Notifications", icon: FaBell },
  ];
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-2 flex gap-1">
        <button type="button" className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"><MdDoNotDisturbAlt className="me-1 text-base" />Unpublish</button>
        <button type="button" className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white"><FaCheckCircle className="me-1 text-base" />Publish</button>
      </div>
      {actions.map(({ title, icon: Icon }) => <button key={title} type="button" className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"><Icon aria-hidden="true" className="shrink-0" />{title}</button>)}
      <button id="wd-ai-status" type="button" className="mb-1 flex w-full items-center gap-2 rounded border border-neutral-300 bg-neutral-100 px-3 py-2 text-left text-sm"><FaBell aria-hidden="true" className="shrink-0" />Sample action</button>
    </div>
  );
}
