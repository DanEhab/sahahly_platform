import type { SectionId } from "./navigation";

export type Workflow = {
  /** Two-digit number from the design review. */
  number: string;
  slug: string;
  section: SectionId;
  /** Screen name used in the review index, page <title> and search. */
  title: string;
  /** One-line purpose, used as the meta description. */
  summary: string;
  /** Last breadcrumb segment shown in the toolbar. */
  crumb: string;
};

export const workflows: Workflow[] = [
  {
    number: "01",
    slug: "new-assignment",
    section: "submissions",
    title: "Create an assignment",
    summary: "Set the title, class, deadline and reviewer before preparing sources.",
    crumb: "Submissions",
  },
  {
    number: "02",
    slug: "default-assistants",
    section: "team",
    title: "Multiple default assistants",
    summary: "Choose several default assistants without reassigning existing work.",
    crumb: "Team & workload",
  },
  {
    number: "03",
    slug: "assignment-allocation",
    section: "team",
    title: "Assignment allocation",
    summary: "Check ownership, eligible assistants and the review deadline.",
    crumb: "Team & workload",
  },
  {
    number: "04",
    slug: "contact-record",
    section: "students",
    title: "Student and parent contacts",
    summary: "Edit class-specific contact records with a clear student identity.",
    crumb: "Students",
  },
  {
    number: "05",
    slug: "contact-import",
    section: "students",
    title: "Contact import",
    summary: "Preserve email matching and preview skipped or duplicate records.",
    crumb: "Students",
  },
  {
    number: "06",
    slug: "start-marking",
    section: "submissions",
    title: "Start marking",
    summary: "Make execution mode, model and submission scope explicit.",
    crumb: "Assignment workspace",
  },
  {
    number: "07",
    slug: "index-marking",
    section: "submissions",
    title: "Index and automatic marking",
    summary: "Keep guidance approval, chunking and automatic-marking rules visible.",
    crumb: "Assignment workspace",
  },
  {
    number: "08",
    slug: "correction-review",
    section: "submissions",
    title: "Review an AI correction",
    summary: "Compare before and after values before changing a correction.",
    crumb: "Correction review",
  },
  {
    number: "09",
    slug: "correction-feedback",
    section: "submissions",
    title: "Question and PDF feedback",
    summary: "Keep the full answer, feedback and clarity controls available.",
    crumb: "Correction review",
  },
  {
    number: "10",
    slug: "monthly-attendance",
    section: "reports",
    title: "Monthly attendance",
    summary: "Record lessons and distinguish missing data from absence.",
    crumb: "Reports",
  },
  {
    number: "11",
    slug: "report-auto-send",
    section: "reports",
    title: "Monthly report auto-send",
    summary: "Make the schedule and per-student parent destination clear.",
    crumb: "Reports",
  },
  {
    number: "12",
    slug: "collective-report",
    section: "reports",
    title: "Teacher collective report",
    summary: "Retain the collective PDF as a separate teacher-facing output.",
    crumb: "Reports",
  },
  {
    number: "13",
    slug: "executive-analysis",
    section: "reports",
    title: "Teacher executive analysis",
    summary: "Choose the assessment scope and preview teacher delivery.",
    crumb: "Reports",
  },
  {
    number: "14",
    slug: "individual-broadcast",
    section: "messages",
    title: "Individual broadcast",
    summary: "Choose recipient source, personalization and deduplication rules.",
    crumb: "Messages",
  },
  {
    number: "15",
    slug: "group-message",
    section: "messages",
    title: "Scheduled group message",
    summary: "Preview the message, audience, attachment and local send time.",
    crumb: "Messages",
  },
  {
    number: "16",
    slug: "schedule-management",
    section: "messages",
    title: "Schedule management",
    summary: "Keep edit, cancel and delete tasks available in a focused panel.",
    crumb: "Messages",
  },
  {
    number: "17",
    slug: "criteria-marking",
    section: "assessment-library",
    title: "Normal and criteria marking",
    summary: "Preserve subject guidance, saved prompts and model controls.",
    crumb: "Assessment library",
  },
  {
    number: "18",
    slug: "question-upload",
    section: "assessment-library",
    title: "Question upload",
    summary: "Retain source metadata and paired mark-scheme files.",
    crumb: "Assessment library",
  },
  {
    number: "19",
    slug: "exam-classifier",
    section: "assessment-library",
    title: "Full-exam classifier",
    summary: "Review proposed question splits and categories before uploading.",
    crumb: "Assessment library",
  },
  {
    number: "20",
    slug: "marking-pipeline",
    section: "automations",
    title: "Marking pipeline",
    summary: "Show each pipeline stage before launching the eligible scope.",
    crumb: "Automations",
  },
  {
    number: "21",
    slug: "queue-access",
    section: "jobs",
    title: "Queue history and access",
    summary: "Retain read-only manager permissions and older-history discovery.",
    crumb: "Jobs & delivery",
  },
  {
    number: "22",
    slug: "partner-publication",
    section: "submissions",
    title: "Partner publication",
    summary: "Keep partner destination, output and publication scope explicit.",
    crumb: "Assignment workspace",
  },
];

export function workflowHref(workflow: Workflow): string {
  return `/workspace/${workflow.section}/${workflow.slug}`;
}

export function findWorkflow(section: string, slug: string): Workflow | undefined {
  return workflows.find((w) => w.section === section && w.slug === slug);
}

export function workflowsInSection(section: SectionId): Workflow[] {
  return workflows.filter((w) => w.section === section);
}
