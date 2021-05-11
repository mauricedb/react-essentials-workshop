import React from "react";

interface Props {
  firstName: string;
  today: Date;
}

export function Greeter({ firstName, today }: Props) {
  return (
    <div>
      <div>Hello {firstName}</div>
      <div>The date today is: {today.toLocaleDateString("nl")}</div>
    </div>
  );
}
