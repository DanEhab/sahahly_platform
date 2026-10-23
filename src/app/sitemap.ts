import type { MetadataRoute } from "next";
import { sectionHref, sections, type SectionId } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { workflowHref, workflows } from "@/lib/workflows";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;
  return [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/sign-in"), changeFrequency: "yearly", priority: 0.3 },
    ...(Object.keys(sections) as SectionId[]).map((id) => ({
      url: url(sectionHref(id)),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...workflows.map((w) => ({ url: url(workflowHref(w)), changeFrequency: "weekly" as const, priority: 0.5 })),
  ];
}
