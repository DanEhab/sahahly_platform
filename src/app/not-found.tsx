import type { Metadata } from "next";
import Link from "next/link";
import { workspaceHome } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="standalone">
      <main className="standalone__card panel" id="main">
        <p className="eyebrow">Error 404</p>
        <h1 className="panel__title standalone__title">We couldn’t find that page</h1>
        <p className="panel__text">
          The link may be out of date, or the page hasn’t been designed yet. Try the workspace or the list of workflow
          previews.
        </p>
        <div className="form-actions">
          <Link href={workspaceHome} className="button button--primary">
            Open the workspace
          </Link>
          <Link href="/" className="button button--secondary">
            All workflow previews
          </Link>
        </div>
      </main>
    </div>
  );
}
