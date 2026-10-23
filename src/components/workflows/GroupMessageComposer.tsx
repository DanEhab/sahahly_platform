"use client";

import { useState } from "react";
import { DemoForm } from "@/components/workspace/DemoForm";
import { FileField, SelectField, TextField } from "@/components/workspace/fields";
import { ACCEPT_ATTACHMENT, repeatOptions } from "@/lib/sample-data";

const audiences = ["Mathematics students · sample group", "Physics students · sample group", "Parents · OL CIE · G1 & G4"];

const initialMessage =
  "Hi everyone, your homework is ready. Please check the assignment deadline and submit your work on time.";

/* 15 · Scheduled group message — form with a live recipient preview. */
export function GroupMessageComposer() {
  const [message, setMessage] = useState(initialMessage);
  const [audience, setAudience] = useState<string>(audiences[0]);

  return (
    <div className="split">
      <DemoForm submitLabel="Preview message →" successMessage="Message previewed. Nothing was sent.">
        <SelectField
          label="Audience"
          name="audience"
          options={audiences}
          autoFocus
          onChange={(event) => setAudience(event.target.value)}
        />
        <div className="field">
          <label className="field__label" htmlFor="field-message">
            Message
          </label>
          <textarea
            id="field-message"
            name="message"
            className="control"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            maxLength={4096}
          />
        </div>
        <SelectField label="Schedule" name="schedule" options={repeatOptions} />
        <TextField label="Send at · Africa/Cairo" name="sendAt" type="datetime-local" defaultValue="2026-10-16T18:00" required />
        <FileField label="Attachment · optional" name="attachment" accept={ACCEPT_ATTACHMENT} />
      </DemoForm>

      <aside className="preview-card" aria-labelledby="recipient-preview-title">
        <h2 id="recipient-preview-title" className="preview-card__title">
          Recipient preview
        </h2>
        <p className="preview-card__meta">WhatsApp · {audience.includes("sample group") ? "sample group" : audience}</p>
        <p className="preview-card__bubble" aria-live="polite">
          {message}
        </p>
        <p className="preview-card__note">Names, attachments and destination are checked again before confirmation.</p>
      </aside>
    </div>
  );
}
