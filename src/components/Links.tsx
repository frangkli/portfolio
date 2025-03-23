import type { PropsWithChildren } from "react";

interface LinkProps {
  href: string;
}

export function HeadingLink(props: PropsWithChildren<LinkProps>) {
  return (
    <a
      href={props.href}
      className="text-dark hover:text-neutral-500 transition-colors dark:text-light dark:hover:text-neutral-400"
    >
      {props.children}
    </a>
  );
}

export function TextLink(props: PropsWithChildren<LinkProps>) {
  return (
    <a
      href={props.href}
      className="text-dark hover:text-neutral-500 transition-colors dark:text-light dark:hover:text-neutral-400 underline underline-offset-3 decoration-neutral-300 decoration-1"
    >
      {props.children}
    </a>
  );
}
