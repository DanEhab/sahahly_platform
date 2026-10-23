import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/workspace/Panel";
import { Toolbar } from "@/components/workspace/Toolbar";
import { sectionHref, sections } from "@/lib/navigation";
import { workflowHref, workflows } from "@/lib/workflows";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

type Result = { href: string; title: string; detail: string };

function search(query: string): Result[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const sectionResults = Object.values(sections)
    .filter((s) => `${s.label} ${s.description}`.toLowerCase().includes(q))
    .map((s) => ({ href: sectionHref(s.id), title: s.label, detail: s.description }));
  const workflowResults = workflows
    .filter((w) => `${w.number} ${w.title} ${w.summary} ${w.crumb}`.toLowerCase().includes(q))
    .map((w) => ({ href: workflowHref(w), title: `${w.number} · ${w.title}`, detail: w.summary }));
  return [...sectionResults, ...workflowResults];
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw ?? "").slice(0, 80);
  const results = search(query);

  return (
    <>
      <Toolbar crumb="Search" />
      <Panel title="Find a page or workflow" closeHref={sectionHref("today")} closeLabel="Close search">
        <div className="stack">
          <p className="panel__text" role="status">
            {query.trim()
              ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”`
              : "Type a page or workflow name in the search box above."}
          </p>
          {results.length > 0 ? (
            <ul className="link-list">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    <span className="link-list__body">
                      <span className="link-list__title">{r.title}</span>
                      <span className="link-list__summary">{r.detail}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Panel>
    </>
  );
}
