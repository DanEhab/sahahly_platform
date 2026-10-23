import { DemoForm } from "@/components/workspace/DemoForm";
import { Checkbox, SelectField, TextAreaField, TextField } from "@/components/workspace/fields";
import { Panel, PreviewNote } from "@/components/workspace/Panel";
import { classrooms, executionModes, models, reviewers } from "@/lib/sample-data";
import type { ScreenProps } from "./types";

/* 01 · Create an assignment */
export function NewAssignment(props: ScreenProps) {
  return (
    <Panel title="New assignment" {...props}>
      <DemoForm submitLabel="Save assignment draft" successMessage="Assignment draft saved in this preview.">
        <div className="form-row">
          <TextField
            label="Title"
            name="title"
            placeholder="e.g. Class 7 Assignment"
            required
            maxLength={120}
            autoFocus
          />
          <SelectField label="Classroom" name="classroom" options={classrooms} />
        </div>
        <div className="form-row">
          <TextField label="Due · Africa/Cairo" name="due" type="datetime-local" defaultValue="2026-10-20T23:59" required />
          <TextField label="Maximum marks" name="maxMarks" type="number" defaultValue={40} min={1} max={1000} required />
        </div>
        <TextAreaField
          label="Instructions"
          name="instructions"
          placeholder="What should students submit?"
          maxLength={4000}
        />
        <SelectField label="Reviewer" name="reviewer" options={reviewers} />
        <p className="panel__hint panel__hint--spaced">
          Save the draft, then add the approved QP, MS and index before marking.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 06 · Start marking */
export function StartMarking(props: ScreenProps) {
  return (
    <Panel title="Start marking" {...props}>
      <DemoForm submitLabel="Preview demo marking job" successMessage="Demo marking job previewed. No job was launched.">
        <div className="form-row">
          <SelectField label="Execution" name="execution" options={executionModes} autoFocus />
          <SelectField label="Model" name="model" options={models} />
        </div>
        <p className="panel__text">Scope: eligible, uncorrected assignment PDFs</p>
        <p className="callout callout--success">
          Preflight: approved sources, index version, expected pages and existing corrections checked.
        </p>
        <p className="panel__text">
          Corrected PDFs are excluded unless you explicitly choose a rerun. The live system must show eligible and
          skipped counts before launch.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 07 · Index and automatic marking */
export function IndexMarking(props: ScreenProps) {
  return (
    <Panel title="Index guidance & automatic marking" {...props}>
      <DemoForm submitLabel="Save demo draft" after={<PreviewNote />}>
        <SelectField label="Model" name="model" options={models} autoFocus />
        <SelectField label="Execution" name="execution" options={["Instant", "Automatic batch · background"]} />
        <TextField label="Pages per request" name="pagesPerRequest" type="number" defaultValue={3} min={1} max={25} required />
        <TextAreaField label="Marking guidance" name="guidance" maxLength={8000} />
        <div className="checks">
          <Checkbox name="indexFinal" label="Index and guidance are final" />
          <Checkbox name="hourlyIndexMarking" label="Enable hourly automatic index marking" />
        </div>
        <p className="panel__text">
          Papers over 25 pages are skipped by the original automatic-index flow. Preserve this rule and show skip
          reasons.
        </p>
      </DemoForm>
    </Panel>
  );
}

/* 08 · Review an AI correction */
export function CorrectionReview(props: ScreenProps) {
  return (
    <Panel title="Preview an AI correction" {...props}>
      <DemoForm
        className="form form--tight"
        submitLabel="Apply mapping change"
        successMessage="Mapping change applied in this preview only."
      >
        <p>Instruction: verify the annotation location while preserving correct marks.</p>
        <div className="compare">
          <section className="compare__card" aria-labelledby="compare-before">
            <h2 id="compare-before" className="compare__title">
              Before
            </h2>
            <p>Question 2(a)(1) · 2 / 2</p>
            <p>Annotation page: 3</p>
          </section>
          <section className="compare__card" aria-labelledby="compare-proposed">
            <h2 id="compare-proposed" className="compare__title">
              Proposed
            </h2>
            <p>Question 2(a)(1) · 2 / 2</p>
            <p>Annotation page: 4</p>
          </section>
        </div>
        <p>Demonstration suggestion. No AI call has been made.</p>
      </DemoForm>
    </Panel>
  );
}

/* 09 · Question and PDF feedback */
export function CorrectionFeedback(props: ScreenProps) {
  return (
    <Panel title="Full correction fields" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <TextAreaField label="Overall PDF summary" name="summary" defaultValue="Scored 73/77" maxLength={4000} autoFocus />
        <TextField label="Question identifier" name="questionId" defaultValue="2(a)(1)" maxLength={40} />
        <TextField label="Final answer" name="finalAnswer" defaultValue="42" maxLength={500} />
        <TextAreaField label="Student answer" name="studentAnswer" defaultValue="12 ÷ 2 = 6; 7 × 6 = 42" maxLength={4000} />
        <TextAreaField label="Model / correct answer" name="modelAnswer" defaultValue="42 strawberries" maxLength={4000} />
        <TextAreaField label="Earned points (PDF)" name="earnedPoints" defaultValue="M1 and A1 awarded" maxLength={2000} />
        <TextAreaField label="Missing points (PDF)" name="missingPoints" maxLength={2000} />
        <TextAreaField label="Examiner note" name="examinerNote" defaultValue="Correct method and total." maxLength={2000} />
        <TextField label="Study topic" name="studyTopic" defaultValue="Ratio" maxLength={120} />
        <TextField label="Revision advice" name="revisionAdvice" maxLength={500} />
        <SelectField
          label="AI error type"
          name="errorType"
          options={["Page mapping", "Marking", "Reading the answer", "Mark scheme", "No error"]}
        />
        <SelectField label="Answer state" name="answerState" options={["Answered", "Partially answered", "Not answered"]} />
        <fieldset className="checks">
          <legend className="visually-hidden">Clarity checks</legend>
          <Checkbox name="scanClear" label="Scan clear" />
          <Checkbox name="handwritingClear" label="Handwriting clear" />
          <Checkbox name="markSchemeUnderstood" label="Mark scheme understood" />
          <Checkbox name="studentAnswerUnderstood" label="Student answer understood" />
        </fieldset>
      </DemoForm>
    </Panel>
  );
}

/* 22 · Partner publication */
export function PartnerPublication(props: ScreenProps) {
  return (
    <Panel title="Publish to IGSpaces / grading partner" {...props}>
      <DemoForm submitLabel="Preview →" after={<PreviewNote />}>
        <SelectField label="Partner" name="partner" options={["Configured partner · sample"]} autoFocus />
        <SelectField label="Output" name="output" options={["Marks + corrected PDF", "Marks only", "Corrected PDF only"]} />
        <SelectField label="Scope" name="scope" options={["Selected eligible records", "All eligible records"]} />
        <p className="panel__text">
          Show destination, partner mapping, correction version and eligibility before publishing. Track blocked and
          permanent failures in Partner publishing jobs.
        </p>
      </DemoForm>
    </Panel>
  );
}
