"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { operationsNav, primaryNav, sectionHref, sections, type SectionId } from "@/lib/navigation";

type SidebarProps = {
  onNavigate: () => void;
};

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (id: SectionId) => {
    const href = sectionHref(id);
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLink = (id: SectionId, compact = false) => (
    <li key={id}>
      <Link
        href={sectionHref(id)}
        className={compact ? "nav-link nav-link--compact" : "nav-link"}
        aria-current={isActive(id) ? "page" : undefined}
        onClick={onNavigate}
      >
        {sections[id].label}
      </Link>
    </li>
  );

  return (
    <nav id="sidebar" className="sidebar" aria-label="Workspace">
      {primaryNav.map((group) => (
        <div key={group.label} className="sidebar__group">
          <h2 className="sidebar__label">{group.label}</h2>
          <ul className="sidebar__list">{group.sections.map((id) => navLink(id))}</ul>
        </div>
      ))}

      <hr className="sidebar__divider" />

      <details className="sidebar__ops" open>
        <summary>Operations &amp; settings</summary>
        <ul className="sidebar__list">{operationsNav.map((id) => navLink(id, true))}</ul>
      </details>

      <hr className="sidebar__divider" />

      <ul className="sidebar__list sidebar__extra">
        <li>
          <Link href="/" className="nav-link nav-link--compact" onClick={onNavigate}>
            Visit public website <span aria-hidden="true">↗</span>
          </Link>
        </li>
        <li>
          <Link
            href="/sign-in"
            className="nav-link nav-link--compact"
            aria-current={pathname === "/sign-in" ? "page" : undefined}
            onClick={onNavigate}
          >
            Sign-in preview
          </Link>
        </li>
      </ul>
      <p className="sidebar__meta">
        Manager workspace
        <br />
        Sample data
      </p>
    </nav>
  );
}
