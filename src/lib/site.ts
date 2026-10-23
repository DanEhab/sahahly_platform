export const siteConfig = {
  name: "Sahahly",
  tagline: "Teaching operations",
  description:
    "Sahahly brings assignments, AI-assisted marking, reports and parent messaging into one teaching-operations workspace.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  /** Search engines are asked not to index the design preview until launch. */
  allowIndexing: process.env.ALLOW_INDEXING === "true",
  timezone: "Africa/Cairo",
} as const;
