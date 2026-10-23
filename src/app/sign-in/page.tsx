import type { Metadata } from "next";
import Link from "next/link";
import { DemoForm } from "@/components/workspace/DemoForm";
import { TextField } from "@/components/workspace/fields";
import { workspaceHome } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the Sahahly manager workspace.",
  alternates: { canonical: "/sign-in" },
};

export default function SignInPage() {
  return (
    <div className="standalone">
      <main className="standalone__card panel" id="main">
        <Link href="/" className="topbar__logo">
          sahahly
        </Link>
        <h1 className="panel__title standalone__title">Sign in to your workspace</h1>
        <DemoForm
          submitLabel="Sign in"
          successMessage="Sign-in is not connected in this design preview."
          after={
            <p className="panel__hint">
              Design preview only. <Link href={workspaceHome}>Continue to the sample workspace</Link>.
            </p>
          }
        >
          <TextField label="Email" name="email" type="email" autoComplete="email" required maxLength={254} />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            minLength={8}
            maxLength={128}
          />
        </DemoForm>
      </main>
    </div>
  );
}
