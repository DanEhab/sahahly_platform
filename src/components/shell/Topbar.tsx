import Link from "next/link";
import { sectionHref, workspaceHome } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

type TopbarProps = {
  /** Whether the sidebar is currently visible (drawer open on mobile). */
  navExpanded: boolean;
  onToggleNav: () => void;
};

export function Topbar({ navExpanded, onToggleNav }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <button
          type="button"
          className="ghost-button"
          aria-controls="sidebar"
          aria-expanded={navExpanded}
          onClick={onToggleNav}
        >
          Menu
        </button>
        <Link href={workspaceHome} className="topbar__logo" aria-label={`${siteConfig.name} home`}>
          sahahly
        </Link>
        <span className="topbar__tagline">{siteConfig.tagline}</span>
      </div>

      <form className="topbar__search" role="search" action="/workspace/search" method="get">
        <label htmlFor="site-search" className="visually-hidden">
          Find a page or workflow
        </label>
        <input
          id="site-search"
          name="q"
          type="search"
          placeholder="Find a page or workflow…"
          autoComplete="off"
          maxLength={80}
        />
        <button type="submit" className="button button--secondary">
          Find
        </button>
      </form>

      <nav className="topbar__actions" aria-label="Account">
        <Link href={sectionHref("ai-workspace")} className="ghost-button ghost-button--base topbar__ask">
          Ask Sahahly
        </Link>
        <Link href={sectionHref("today")} className="ghost-button ghost-button--inbox" aria-label="Inbox, 3 new items">
          Inbox <span className="badge">3</span>
        </Link>
        <Link href={sectionHref("settings")} className="avatar" aria-label="Manager account settings">
          M
        </Link>
      </nav>
    </header>
  );
}
