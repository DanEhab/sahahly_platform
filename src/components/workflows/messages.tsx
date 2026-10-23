import { DemoForm } from "@/components/workspace/DemoForm";
import { CheckboxGroup, FileField, SelectField, TextAreaField, TextField } from "@/components/workspace/fields";
import { Panel, PreviewNote } from "@/components/workspace/Panel";
import { ACCEPT_ATTACHMENT, ACCEPT_SPREADSHEET, repeatOptions, weekdays } from "@/lib/sample-data";
import { GroupMessageComposer } from "./GroupMessageComposer";
import type { ScreenProps } from "./types";

/* 14 · Individual broadcast */
export function IndividualBroadcast(props: ScreenProps) {
  return (
    <Panel title="Individual WhatsApp broadcast" {...props}>
      <DemoForm submitLabel="Preview →" successMessage="Broadcast previewed. Nothing was sent." after={<PreviewNote />}>
        <TextField label="Broadcast reference name" name="reference" required maxLength={120} autoFocus />
        <SelectField label="Recipient source" name="recipientSource" options={["Excel / CSV sheet", "Classroom contacts"]} />
        <SelectField label="Audience" name="audience" options={["Parents", "Students", "Parents and students"]} />
        <FileField label="Recipient sheet (optional)" name="recipientSheet" accept={ACCEPT_SPREADSHEET} />
        <TextAreaField
          label="Message"
          name="message"
          defaultValue={"Hello {{name}}, here is the update for {{student}}."}
          maxLength={4096}
        />
        <FileField label="Attachment · message or attachment required" name="attachment" accept={ACCEPT_ATTACHMENT} />
        <p className="panel__text">
          Support English / Arabic name and phone headings and Egyptian 01… phone normalization. Deduplicate shared
          parent / student numbers. Missing numbers stay excluded.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 15 · Scheduled group message */
export function GroupMessage(props: ScreenProps) {
  return (
    <Panel title="Compose a message" {...props}>
      <GroupMessageComposer />
    </Panel>
  );
}

/* 16 · Schedule management */
export function ScheduleManagement(props: ScreenProps) {
  return (
    <Panel title="Manage scheduled message" {...props}>
      <DemoForm submitLabel="Preview →" successMessage="Changes previewed. Nothing was sent." after={<PreviewNote />}>
        <SelectField label="Action" name="action" options={["Edit schedule", "Pause schedule", "Cancel next run", "Delete schedule"]} autoFocus />
        <SelectField label="Repeat" name="repeat" options={repeatOptions} />
        <TextField label="Send at · Africa/Cairo" name="sendAt" type="datetime-local" defaultValue="2026-10-17T18:00" required />
        <CheckboxGroup legend="Repeat on" name="days" options={weekdays} />
        <TextAreaField label="Message" name="message" defaultValue="Homework reminder" required maxLength={4096} />
        <p className="panel__text">Show next run, last run, state and attachment. Confirm changes without sending.</p>
      </DemoForm>
    </Panel>
  );
}
