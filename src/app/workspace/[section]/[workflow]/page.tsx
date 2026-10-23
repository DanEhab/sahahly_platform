import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { screens } from "@/components/workflows";
import { Toolbar } from "@/components/workspace/Toolbar";
import { sectionHref, sections } from "@/lib/navigation";
import { findWorkflow, workflowHref, workflows } from "@/lib/workflows";

type Params = { section: string; workflow: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return workflows.map((w) => ({ section: w.section, workflow: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section, workflow: slug } = await params;
  const workflow = findWorkflow(section, slug);
  if (!workflow) return {};
  return {
    title: workflow.title,
    description: workflow.summary,
    alternates: { canonical: workflowHref(workflow) },
  };
}

export default async function WorkflowPage({ params }: { params: Promise<Params> }) {
  const { section, workflow: slug } = await params;
  const workflow = findWorkflow(section, slug);
  const Screen = workflow ? screens[workflow.slug] : undefined;
  if (!workflow || !Screen) notFound();

  const parent = sections[workflow.section];
  return (
    <>
      <Toolbar crumb={workflow.crumb} />
      <Screen closeHref={sectionHref(parent.id)} closeLabel={`Close and return to ${parent.label}`} />
    </>
  );
}
