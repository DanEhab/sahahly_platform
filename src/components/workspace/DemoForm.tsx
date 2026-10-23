"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type DemoFormProps = {
  submitLabel: ReactNode;
  /** Shown after a valid submit. Nothing leaves the browser in the preview. */
  successMessage?: string;
  /** Rendered between the fields and the submit button. */
  children: ReactNode;
  /** Rendered after the submit button (usually the preview note). */
  after?: ReactNode;
  className?: string;
};

/**
 * Front-end-only form: relies on native constraint validation, then shows a
 * confirmation instead of sending anything. Swap `handleSubmit` for a server
 * action when the backend phase starts.
 */
export function DemoForm({
  submitLabel,
  successMessage = "Saved in this preview only. Nothing was sent.",
  children,
  after,
  className = "form",
}: DemoFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(successMessage);
  }

  return (
    <form className={className} onSubmit={handleSubmit} onChange={() => status && setStatus("")}>
      {children}
      <div className="form-actions">
        <button type="submit" className="button button--primary">
          {submitLabel}
        </button>
        <p className="form-status" role="status">
          {status}
        </p>
      </div>
      {after}
    </form>
  );
}
