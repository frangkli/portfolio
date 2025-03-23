import type { PropsWithChildren } from "react";

export function Heading(props: PropsWithChildren) {
  return (
    <h1 className="text-sm font-bold text-neutral-400 py-4">
      {props.children}
    </h1>
  );
}
