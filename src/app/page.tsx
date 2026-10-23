import type { Metadata } from "next";
import Link from "next/link";
import { sections, workspaceHome } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { workflowHref, workflows } from "@/lib/workflows";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} — The workflows in detail` },
  description:
    "Preview Sahahly’s 22 teaching-operations workflows: assignments, AI-assisted marking, reports, parent messaging and the assessment library.",
  alternates: { canonical: "/" },
};

export default function ReviewIndexPage() {
  return (
    <div className="review">
      <header className="review__hero">
        <div className="review__inner">
          <p className="review__logo">sahahly</p>
          <p className="eyebrow">
            UI / UX design review <span aria-hidden="true">|</span> 16 October 2026
          </p>
          <h1 className="review__title">The workflows in detail</h1>
          <p className="review__subtitle">Key forms, review panels and advanced controls</p>
          <div className="review__cta">
            <Link href={workspaceHome} className="button button--primary button--lg">
              Open the manager workspace <span aria-hidden="true">→</span>
            </Link>
            <span className="review__count">{workflows.length} visual screens to review</span>
          </div>
        </div>
      </header>

      <main id="main" className="review__contents">
        <div className="review__inner">
          <h2 className="review__heading">Inside this preview</h2>
          <p className="review__lede">One webpage or focused workflow per page. Select an entry to jump directly to it.</p>
          <ol className="contents">
            {workflows.map((w) => (
              <li key={w.slug}>
                <Link href={workflowHref(w)} className="contents__link">
                  <span className="contents__number">{w.number}</span>
                  <span className="contents__title">{w.title}</span>
                  <span className="contents__section">{sections[w.section].label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </main>

      <footer className="review__footer">
        <div className="review__inner">
          <p>Design proposal with sample records. The live website has not been changed.</p>
          <p>Advanced forms illustrate intended controls; backend integrations are not connected.</p>
          <p>The audited scope covers the visible manager workspace and public/sign-in concepts.</p>
          <p className="review__footer-links">
            <Link href="/sign-in">Sign-in preview</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
