import { redirect } from "next/navigation";
import { workspaceHome } from "@/lib/navigation";

export default function WorkspaceIndex() {
  redirect(workspaceHome);
}
