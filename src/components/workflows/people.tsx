import { DemoForm } from "@/components/workspace/DemoForm";
import { CheckboxGroup, FileField, SelectField, TextField } from "@/components/workspace/fields";
import { Panel, PreviewNote } from "@/components/workspace/Panel";
import { ACCEPT_SPREADSHEET, classrooms, reviewers } from "@/lib/sample-data";
import type { ScreenProps } from "./types";

/* 02 · Multiple default assistants */
export function DefaultAssistants(props: ScreenProps) {
  return (
    <Panel title="Classroom default assistants" {...props}>
      <DemoForm submitLabel="Save demo draft" after={<PreviewNote />}>
        <SelectField label="Classroom" name="classroom" options={classrooms} autoFocus />
        <CheckboxGroup legend="Default assistants" name="assistants" options={reviewers} />
        <p className="panel__text">
          Choose one or more assistants. Defaults apply to new Classroom coursework; existing assignments keep their
          owners.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 03 · Assignment allocation */
export function AssignmentAllocation(props: ScreenProps) {
  return (
    <Panel title="Assignment assistants & deadline" {...props}>
      <DemoForm submitLabel="Save demo draft" after={<PreviewNote />}>
        <TextField label="Assignment" name="assignment" defaultValue="Class 5 Assignment" required maxLength={120} autoFocus />
        <CheckboxGroup legend="Assistants" name="assistants" options={reviewers} />
        <TextField
          label="Deadline · Africa/Cairo"
          name="deadline"
          type="datetime-local"
          defaultValue="2026-10-16T18:00"
          required
        />
        <p className="panel__text">Check eligibility, capacity and current ownership before confirming.</p>
      </DemoForm>
    </Panel>
  );
}

/* 04 · Student and parent contacts */
export function ContactRecord(props: ScreenProps) {
  return (
    <Panel title="Student contact record" {...props}>
      <DemoForm submitLabel="Save demo draft" after={<PreviewNote />}>
        <TextField label="Student ID" name="studentId" defaultValue="S-1042" required maxLength={20} autoFocus />
        <TextField
          label="Student email"
          name="studentEmail"
          type="email"
          defaultValue="student-a@example.com"
          required
          maxLength={254}
        />
        <TextField label="Student phone" name="studentPhone" type="tel" inputMode="tel" autoComplete="off" maxLength={20} />
        <TextField label="Parent name" name="parentName" defaultValue="Sample parent" maxLength={120} />
        <TextField label="Parent phone" name="parentPhone" type="tel" inputMode="tel" autoComplete="off" maxLength={20} />
        <p className="panel__text">
          Contact values belong to this teacher / classroom record. Saving affects future report recipients.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 05 · Contact import */
export function ContactImport(props: ScreenProps) {
  return (
    <Panel title="Import contacts by student email" {...props}>
      <DemoForm submitLabel="Preview →" successMessage="Import preview ready. Nothing was imported." after={<PreviewNote />}>
        <FileField label="CSV / Excel file" name="contactsFile" accept={ACCEPT_SPREADSHEET} required />
        <p className="panel__text">
          Match existing class students by Student Email. Never create a student. Skip missing, unknown or duplicate
          emails.
        </p>
        <p className="panel__text">
          Accepted fields: Student Email, Parent Name, Parent Phone, Student Phone, Email. Phone and parent-name fields
          overwrite saved values.
        </p>
      </DemoForm>
    </Panel>
  );
}
