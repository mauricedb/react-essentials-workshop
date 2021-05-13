import React, { ChangeEventHandler, ReactNode } from "react";

interface Props {
  label: ReactNode;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export function FormInput({ label, value, onChange }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" value={value} onChange={onChange} />
    </div>
  );
}
