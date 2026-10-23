import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Panel } from "@/components/workspace/Panel";
import { Toolbar } from "@/components/workspace/Toolbar";
import { isSectionId, sectionHref, sections, type SectionId } from "@/lib/navigation";
import { workflowHref, workflows, workflowsInSection } from "@/lib/workflows";

type Params = { section: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.keys(sections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section } = await params;
  if (!isSectionId(section)) return {};
  return {
    title: sections[section].label,
    description: sections[section].description,
    alternates: { canonical: sectionHref(section) },
  };
}

export default async function SectionPage({ params }: { params: Promise<Params> }) {
  const { section } = await params;
  if (!isSectionId(section)) notFound();

  // "Today" is the workspace home, so it lists every workflow in the preview.
  const items = section === "today" ? workflows : workflowsInSection(section as SectionId);
  const { label, description } = sections[section];

  return (
    <>
      <Toolbar crumb={label} />
      <Panel title={label}>
        <div className="stack">
          <p className="panel__text">{description}</p>
          {items.length > 0 ? (
            <ul className="link-list">
              {items.map((w) => (
                <li key={w.slug}>
                  <Link href={workflowHref(w)}>
                    <span className="link-list__number">{w.number}</span>
                    <span className="link-list__body">
                      <span className="link-list__title">{w.title}</span>
                      <span className="link-list__summary">{w.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="panel__hint">
              No workflow screens from the design review live on this page yet.{" "}
              <Link href={sectionHref("today")}>Browse all workflows</Link>.
            </p>
          )}
        </div>
      </Panel>
    </>
  );
}
