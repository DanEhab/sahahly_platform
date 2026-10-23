export type SectionId =
  | "today"
  | "classrooms"
  | "submissions"
  | "students"
  | "team"
  | "reports"
  | "messages"
  | "assessment-library"
  | "automations"
  | "jobs"
  | "quality"
  | "ai-workspace"
  | "quick-tasks"
  | "settings";

export type Section = {
  id: SectionId;
  label: string;
  /** One-line description used for the landing page and meta description. */
  description: string;
};

export type NavGroup = {
  label: string;
  sections: SectionId[];
};

export const sections: Record<SectionId, Section> = {
  today: {
    id: "today",
    label: "Today",
    description: "Your daily overview of marking, messages and deadlines.",
  },
  classrooms: {
    id: "classrooms",
    label: "Classrooms",
    description: "Classrooms, rosters and teacher assignments.",
  },
  submissions: {
    id: "submissions",
    label: "Submissions",
    description: "Create assignments, start marking and review AI corrections.",
  },
  students: {
    id: "students",
    label: "Students",
    description: "Student identities and parent contact records.",
  },
  team: {
    id: "team",
    label: "Team & workload",
    description: "Default assistants, allocation and review deadlines.",
  },
  reports: {
    id: "reports",
    label: "Reports",
    description: "Attendance, parent reports and teacher analytics.",
  },
  messages: {
    id: "messages",
    label: "Messages",
    description: "WhatsApp broadcasts, group messages and schedules.",
  },
  "assessment-library": {
    id: "assessment-library",
    label: "Assessment library",
    description: "Question banks, mark schemes and marking modes.",
  },
  automations: {
    id: "automations",
    label: "Automations",
    description: "Marking pipelines and scheduled automations.",
  },
  jobs: {
    id: "jobs",
    label: "Jobs & delivery",
    description: "Queues, delivery status and job history.",
  },
  quality: {
    id: "quality",
    label: "Quality & usage",
    description: "Marking quality signals and usage.",
  },
  "ai-workspace": {
    id: "ai-workspace",
    label: "AI workspace",
    description: "Ask Sahahly and AI-assisted tools.",
  },
  "quick-tasks": {
    id: "quick-tasks",
    label: "Quick task menu",
    description: "Shortcuts to the most common tasks.",
  },
  settings: {
    id: "settings",
    label: "Settings & help",
    description: "Workspace settings, access and help.",
  },
};

export const primaryNav: NavGroup[] = [
  { label: "Daily work", sections: ["today", "classrooms", "submissions", "students", "team"] },
  { label: "Communicate", sections: ["reports", "messages"] },
  { label: "Build & run", sections: ["assessment-library", "automations"] },
];

export const operationsNav: SectionId[] = ["jobs", "quality", "ai-workspace", "quick-tasks", "settings"];

export const workspaceHome = "/workspace/today";

export function sectionHref(id: SectionId): string {
  return `/workspace/${id}`;
}

export function isSectionId(value: string): value is SectionId {
  return Object.hasOwn(sections, value);
}
