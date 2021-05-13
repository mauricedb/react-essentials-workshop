import React, { ChangeEventHandler, ReactNode } from "react";

interface Props {
  label: ReactNode;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
}
export function FormTextArea({ label, rows, value, onChange }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
}
