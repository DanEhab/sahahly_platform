import Link from "next/link";
import type { ReactNode } from "react";

type PanelProps = {
  title: string;
  /** Where "Close ×" leads; omit to hide the button. */
  closeHref?: string;
  closeLabel?: string;
  children: ReactNode;
};

/** The bordered workflow panel. Its title is the page's main heading. */
export function Panel({ title, closeHref, closeLabel, children }: PanelProps) {
  return (
    <section className="panel" aria-labelledby="panel-title">
      <div className="panel__head">
        <h1 id="panel-title" className="panel__title">
          {title}
        </h1>
        {closeHref ? (
          <Link href={closeHref} className="button button--secondary" aria-label={closeLabel ?? "Close"}>
            Close <span aria-hidden="true">×</span>
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function PreviewNote() {
  return <p className="panel__hint">Design preview only. No production changes or external transmissions.</p>;
}
