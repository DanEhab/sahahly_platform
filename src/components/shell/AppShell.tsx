"use client";

import { useCallback, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

const MOBILE_QUERY = "(max-width: 960px)";

function subscribeToViewport(onChange: () => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const isMobileViewport = () => window.matchMedia(MOBILE_QUERY).matches;

/**
 * Workspace frame: top bar, sidebar, main content and footer.
 * "Menu" collapses the sidebar on desktop and opens it as a drawer on mobile.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [navToggled, setNavToggled] = useState(false);
  const isMobile = useSyncExternalStore(subscribeToViewport, isMobileViewport, () => false);

  const toggleNav = useCallback(() => setNavToggled((toggled) => !toggled), []);

  const closeDrawerOnMobile = useCallback(() => {
    if (isMobileViewport()) setNavToggled(false);
  }, []);

  useEffect(() => {
    if (!navToggled) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawerOnMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navToggled, closeDrawerOnMobile]);

  return (
    <div className="app" data-nav-toggled={navToggled}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Topbar navExpanded={isMobile ? navToggled : !navToggled} onToggleNav={toggleNav} />
      <div className="app__body">
        <Sidebar onNavigate={closeDrawerOnMobile} />
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeDrawerOnMobile}
        />
        <main id="main" className="main" tabIndex={-1}>
          {children}
        </main>
      </div>
      <footer className="app__footer">
        Design preview · Sample records and proposed workflows · Changes stay in this preview
      </footer>
    </div>
  );
}
