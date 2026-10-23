import type { ComponentType } from "react";
import { CriteriaMarking, ExamClassifier, MarkingPipeline, QueueAccess, QuestionUpload } from "./build";
import { GroupMessage, IndividualBroadcast, ScheduleManagement } from "./messages";
import { AssignmentAllocation, ContactImport, ContactRecord, DefaultAssistants } from "./people";
import { CollectiveReport, ExecutiveAnalysis, MonthlyAttendance, ReportAutoSend } from "./reports";
import {
  CorrectionFeedback,
  CorrectionReview,
  IndexMarking,
  NewAssignment,
  PartnerPublication,
  StartMarking,
} from "./submissions";
import type { ScreenProps } from "./types";

/** Workflow slug → screen component. Keys match `workflows` in lib/workflows.ts. */
export const screens: Record<string, ComponentType<ScreenProps>> = {
  "new-assignment": NewAssignment,
  "default-assistants": DefaultAssistants,
  "assignment-allocation": AssignmentAllocation,
  "contact-record": ContactRecord,
  "contact-import": ContactImport,
  "start-marking": StartMarking,
  "index-marking": IndexMarking,
  "correction-review": CorrectionReview,
  "correction-feedback": CorrectionFeedback,
  "monthly-attendance": MonthlyAttendance,
  "report-auto-send": ReportAutoSend,
  "collective-report": CollectiveReport,
  "executive-analysis": ExecutiveAnalysis,
  "individual-broadcast": IndividualBroadcast,
  "group-message": GroupMessage,
  "schedule-management": ScheduleManagement,
  "criteria-marking": CriteriaMarking,
  "question-upload": QuestionUpload,
  "exam-classifier": ExamClassifier,
  "marking-pipeline": MarkingPipeline,
  "queue-access": QueueAccess,
  "partner-publication": PartnerPublication,
};

export type { ScreenProps };
