import { DemoForm } from "@/components/workspace/DemoForm";
import { Checkbox, CheckboxGroup, FileField, SelectField, TextAreaField, TextField } from "@/components/workspace/fields";
import { Panel, PreviewNote } from "@/components/workspace/Panel";
import { ACCEPT_SPREADSHEET, assignments, attendanceStates, classrooms } from "@/lib/sample-data";
import type { ScreenProps } from "./types";

/* 10 · Monthly attendance */
export function MonthlyAttendance(props: ScreenProps) {
  return (
    <Panel title="Monthly attendance" {...props}>
      <DemoForm submitLabel="Save demo draft" after={<PreviewNote />}>
        <SelectField
          label="Report month"
          name="month"
          options={["October 2026", "September 2026", "November 2026"]}
          autoFocus
        />
        <TextField label="Number of school lessons" name="lessons" type="number" defaultValue={2} min={0} max={31} required />
        <div className="form-row">
          <SelectField label="Student A · Lesson 1" name="lesson1" options={attendanceStates} />
          <SelectField label="Student A · Lesson 2" name="lesson2" options={attendanceStates} />
        </div>
        <FileField label="Attendance Excel per lesson" name="attendanceFiles" accept={ACCEPT_SPREADSHEET} multiple />
        <p className="panel__text">
          Reports include assignments due in the selected month. Missing attendance is not equivalent to absent.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 11 · Monthly report auto-send */
export function ReportAutoSend(props: ScreenProps) {
  return (
    <Panel title="Monthly parent auto-send rule" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <Checkbox name="autoSend" label="Automatically send this classroom’s monthly parent reports" />
        <TextField label="Day of month" name="dayOfMonth" type="number" defaultValue={1} min={1} max={28} required />
        <p className="panel__text">
          Each student’s report goes to that student’s saved parent contact. Keep contact validation, selected month
          and delivery history visible.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 12 · Teacher collective report */
export function CollectiveReport(props: ScreenProps) {
  return (
    <Panel title="Teacher collective PDF" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <SelectField label="Classroom" name="classroom" options={classrooms} autoFocus />
        <CheckboxGroup legend="Assignments" name="assignments" options={assignments} />
        <SelectField label="Channel" name="channel" options={["PDF preview / download", "WhatsApp to teacher"]} />
        <p className="panel__text">
          Preserve a teacher’s collective PDF as a separate output from an executive analysis report.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 13 · Teacher executive analysis */
export function ExecutiveAnalysis(props: ScreenProps) {
  return (
    <Panel title="Teacher executive analysis" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <SelectField label="Classroom" name="classroom" options={classrooms} autoFocus />
        <SelectField label="Assignment" name="assignment" options={assignments} />
        <TextAreaField
          label="Report options"
          name="reportOptions"
          placeholder="Analysis scope and teacher notes"
          maxLength={4000}
        />
        <p className="panel__text">
          Preview the assignment analytics PDF and the classroom teacher’s destination before WhatsApp delivery.
        </p>
      </DemoForm>
    </Panel>
  );
}
