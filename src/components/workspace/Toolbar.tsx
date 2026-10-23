import Link from "next/link";
import { workspaceHome } from "@/lib/navigation";

const teacherOptions = ["All teachers", "Teacher A · Mathematics", "Teacher B · Physics"];
const classroomOptions = ["All classrooms", "OL CIE · G1 & G4", "OL CIE · G2 & G3"];

/** Filter selects and breadcrumb shown above every workspace page. */
export function Toolbar({ crumb }: { crumb: string }) {
  return (
    <div className="toolbar">
      <div className="toolbar__filters">
        <select className="filter-select filter-select--teachers" aria-label="Filter by teacher" defaultValue={teacherOptions[0]}>
          {teacherOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select
          className="filter-select filter-select--classrooms"
          aria-label="Filter by classroom"
          defaultValue={classroomOptions[0]}
        >
          {classroomOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href={workspaceHome}>Workspace</Link>
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>
    </div>
  );
}
