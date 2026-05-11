import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  { title: "Product", links: [{ href: "/#features", label: "Features" }, { href: "/#workflow", label: "How it works" }, { href: "/#security", label: "Security" }] },
  { title: "Company", links: [{ href: "/about", label: "About" }, { href: "/contact", label: "Contact" }] },
  { title: "Legal", links: [{ href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms of Service" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/75 py-14">
      <div className="container grid gap-10 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">P</span>
            <span className="text-lg font-bold text-slate-950">{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">{site.description}</p>
          <p className="mt-5 text-sm text-slate-500">{site.legalName}<br />{site.address}<br /><a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-slate-950">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {column.links.map((link) => <li key={link.href}><Link className="hover:text-indigo-700" href={link.href}>{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.legalName}. All rights reserved.</p>
        <p>Not a law firm. Providence AI helps organize information and does not provide legal, tax, or financial advice.</p>
      </div>
    </footer>
  );
}
