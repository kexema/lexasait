import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/78 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label={`${site.name} home`}>
          <span className="grid size-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-indigo-500/20">P</span>
          <span className="text-lg font-bold tracking-tight text-slate-950">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="focus-ring rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-indigo-700">
          Request demo
        </Link>
      </div>
    </header>
  );
}
