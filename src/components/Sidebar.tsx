import { HeadingLink } from "./Links";
import { GitHub, Linkedin, Mail, File } from "react-feather";

const ICON_SIZE = 16;
const links = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/resume",
    label: "Resume",
  },
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: "https://github.com/frangkli",
    label: "Projects",
  },
];

export function Sidebar() {
  return (
    <aside className="min-w-fit text-center md:text-right">
      <div className="flex flex-col h-1/2 pt-16 gap-4">
        <div className="grow">
          <h1 className="text-5xl font-cursive italic mb-6">Frank Li</h1>
          <nav className="not-md:flex not-md:flex-row not-md:flex-wrap not-md:justify-center">
            <ul className="not-md:space-x-2 md:space-y-2">
              {links.map((link) => (
                <li key={link.href} className="not-md:inline">
                  <HeadingLink href={link.href}>{link.label}</HeadingLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="md:text-left text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex flex-row gap-5 not-md:justify-center">
            <HeadingLink href="https://github.com/frangkli">
              <GitHub size={ICON_SIZE} />
            </HeadingLink>
            <HeadingLink href="https://linkedin.com/in/anglifrank">
              <Linkedin size={ICON_SIZE} />
            </HeadingLink>
            <HeadingLink href="mailto:angli23@cs.washington.edu">
              <Mail size={ICON_SIZE} />
            </HeadingLink>
          </div>
          <br />© 2025 Frank Li
        </div>
      </div>
    </aside>
  );
}
