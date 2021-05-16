import React, { ChangeEventHandler, ReactNode } from "react";

interface Props {
  errors?: string[];
  label: ReactNode;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export function FormInput({ errors, label, value, onChange }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" value={value} onChange={onChange} />

      {errors?.map((e) => (
        <div className="invalid-feedback d-block" key={e}>
          {e}
        </div>
      ))}
    </div>
  );
}
