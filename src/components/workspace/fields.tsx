import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

/*
 * Form building blocks for the workflow panels. Each control's id is derived
 * from its `name`, so names must be unique within a form.
 */

type BaseProps = {
  label: ReactNode;
  name: string;
};

function Field({ id, label, children }: { id: string; label: ReactNode; children: ReactNode }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

const fieldId = (name: string) => `field-${name}`;

export function TextField({
  label,
  name,
  type = "text",
  ...rest
}: BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">) {
  return (
    <Field id={fieldId(name)} label={label}>
      <input id={fieldId(name)} name={name} type={type} className="control" {...rest} />
    </Field>
  );
}

export function TextAreaField({
  label,
  name,
  ...rest
}: BaseProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">) {
  return (
    <Field id={fieldId(name)} label={label}>
      <textarea id={fieldId(name)} name={name} className="control" {...rest} />
    </Field>
  );
}

export function SelectField({
  label,
  name,
  options,
  ...rest
}: BaseProps & { options: readonly string[] } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "id">) {
  return (
    <Field id={fieldId(name)} label={label}>
      <select id={fieldId(name)} name={name} className="control" defaultValue={options[0]} {...rest}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}

export function FileField({
  label,
  name,
  ...rest
}: BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id" | "type">) {
  return (
    <Field id={fieldId(name)} label={label}>
      <input id={fieldId(name)} name={name} type="file" className="control control--file" {...rest} />
    </Field>
  );
}

/** A stack of checkboxes; `legend` is announced to screen readers only. */
export function CheckboxGroup({
  legend,
  name,
  options,
}: {
  legend: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <fieldset className="checks">
      <legend className="visually-hidden">{legend}</legend>
      {options.map((option) => (
        <Checkbox key={option} name={name} value={option} label={option} />
      ))}
    </fieldset>
  );
}

export function Checkbox({ name, label, value = "on" }: { name: string; label: ReactNode; value?: string }) {
  return (
    <label className="check">
      <input type="checkbox" name={name} value={value} />
      {label}
    </label>
  );
}
