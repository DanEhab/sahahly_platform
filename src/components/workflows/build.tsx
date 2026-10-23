import { DemoForm } from "@/components/workspace/DemoForm";
import { FileField, SelectField, TextAreaField, TextField } from "@/components/workspace/fields";
import { Panel, PreviewNote } from "@/components/workspace/Panel";
import { ACCEPT_PDF, ACCEPT_QUESTION_FILES, assignments, boards, classrooms } from "@/lib/sample-data";
import type { ScreenProps } from "./types";

/* 17 · Normal and criteria marking */
export function CriteriaMarking(props: ScreenProps) {
  return (
    <Panel title="Sahahly normal / criteria marking" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <SelectField
          label="Marking mode"
          name="mode"
          options={["Normal marking · subject rules", "Criteria marking · rubric"]}
          autoFocus
        />
        <SelectField label="Model" name="model" options={["Sahahly 1", "Sahahly 2"]} />
        <SelectField label="Board" name="board" options={["Optional", ...boards]} />
        <TextField label="Subject (optional)" name="subject" maxLength={120} />
        <FileField label="Student answer PDF" name="answerPdf" accept={ACCEPT_PDF} required />
        <FileField label="Mark-scheme PDF" name="markSchemePdf" accept={ACCEPT_PDF} required />
        <TextField label="Maximum exam grade" name="maxGrade" type="number" min={1} max={1000} />
        <TextAreaField label="Additional guidance" name="guidance" maxLength={8000} />
        <div>
          <button type="button" className="button button--secondary button--secondary-base">
            Saved prompts
          </button>
        </div>
      </DemoForm>
    </Panel>
  );
}

/* 18 · Question upload */
export function QuestionUpload(props: ScreenProps) {
  return (
    <Panel title="Upload questions with metadata" {...props}>
      <DemoForm submitLabel="Preview →" successMessage="Upload previewed. No files left your device." after={<PreviewNote />}>
        <SelectField label="Board" name="board" options={boards} autoFocus />
        <TextField label="Subject" name="subject" required maxLength={120} />
        <TextField label="Unit" name="unit" maxLength={120} />
        <TextField label="Chapter" name="chapter" maxLength={120} />
        <TextField label="Year" name="year" type="number" defaultValue={2026} min={2000} max={2100} required />
        <SelectField label="Session" name="session" options={["May/June", "October/November", "February/March"]} />
        <SelectField label="Variant" name="variant" options={["1", "2", "3"]} />
        <TextField label="Paper number" name="paper" maxLength={10} />
        <TextField label="Question number" name="question" maxLength={10} />
        <FileField label="Question files · PDF / JPG / PNG / WEBP" name="questionFiles" accept={ACCEPT_QUESTION_FILES} multiple required />
        <FileField label="Matching mark-scheme files · optional" name="markSchemeFiles" accept={ACCEPT_QUESTION_FILES} multiple />
        <p className="panel__text">
          Original upload limit: 20 MB per question file. Preserve source / MS pairing and Drive destination.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 19 · Full-exam classifier */
export function ExamClassifier(props: ScreenProps) {
  return (
    <Panel title="Classify a full exam" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <p className="panel__text">
          1 Select subject → 2 Upload exam → 3 Review &amp; edit → 4 Upload to Drive
        </p>
        <SelectField label="Board" name="board" options={boards} autoFocus />
        <TextField label="Subject" name="subject" required maxLength={120} />
        <FileField label="Full exam" name="exam" accept={ACCEPT_PDF} required />
        <p className="panel__text">Classification requires a review step before storing question files and metadata.</p>
      </DemoForm>
    </Panel>
  );
}

/* 20 · Marking pipeline */
export function MarkingPipeline(props: ScreenProps) {
  return (
    <Panel title="Assignment marking automation" {...props}>
      <DemoForm submitLabel="Preview →" successMessage="Pipeline previewed. No marking was launched." after={<PreviewNote />}>
        <SelectField label="Classroom" name="classroom" options={classrooms} autoFocus />
        <SelectField label="Assignment" name="assignment" options={assignments} />
        <SelectField label="Scope" name="scope" options={["All eligible submissions", "Selected submissions"]} />
        <ol className="steps">
          <li>1 · Verify the mark scheme</li>
          <li>2 · Generate / inspect guidance prompt</li>
          <li>3 · Determine expected student pages</li>
          <li>4 · Preview batch-marking scope</li>
        </ol>
      </DemoForm>
    </Panel>
  );
}

/* 21 · Queue history and access */
export function QueueAccess(props: ScreenProps) {
  return (
    <Panel title="Manager queue permissions" {...props}>
      <div className="stack">
        <p className="callout callout--warning">
          Automatic Batch Queue and Indexing Queue controls are read-only for managers in the original product.
        </p>
        <p className="panel__text">
          Managers can inspect status, progress, failure reason and timestamps. Do not expose run, reorder, cancel or
          retry execution controls for these queues without verified permission.
        </p>
      </div>
    </Panel>
  );
}
