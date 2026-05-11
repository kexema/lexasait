import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  DocumentMagnifyingGlassIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Secure AI estate planning workspace",
  description: "Organize family documents, legacy decisions, and advisor-ready estate planning workflows in a secure AI workspace.",
};

const features = [
  { icon: CloudArrowUpIcon, title: "Guided document vault", copy: "Upload wills, deeds, insurance files, and account notes into a structured workspace designed for families and advisors." },
  { icon: SparklesIcon, title: "AI organization", copy: "Classify documents, surface missing items, and generate plain-language summaries without making legal or financial promises." },
  { icon: DocumentMagnifyingGlassIcon, title: "Readiness reviews", copy: "Spot incomplete beneficiary details, outdated contacts, and follow-up questions before an advisor meeting." },
  { icon: ClipboardDocumentCheckIcon, title: "Advisor-ready packets", copy: "Export clean summaries and checklists that help attorneys, tax professionals, and fiduciaries move faster." },
  { icon: UserGroupIcon, title: "Family collaboration", copy: "Invite trusted relatives or professionals with granular permissions, activity history, and revocable access." },
  { icon: LockClosedIcon, title: "Secure sharing", copy: "Send encrypted links with expiration dates instead of forwarding sensitive attachments through email threads." },
  { icon: ChartBarIcon, title: "Planning dashboard", copy: "Track coverage across documents, assets, healthcare directives, contact lists, and follow-up tasks." },
  { icon: Cog6ToothIcon, title: "Workflow automation", copy: "Convert planning gaps into tasks, reminders, and owner assignments so nothing gets lost after onboarding." },
];

const steps = [
  { title: "Create a private workspace", copy: "Start with a guided intake that explains what to collect and why each item matters." },
  { title: "Upload and organize", copy: "Providence AI labels documents, extracts key fields, and keeps originals available in the vault." },
  { title: "Review gaps safely", copy: "The platform highlights potential missing information and recommends advisor discussion topics." },
  { title: "Share with confidence", copy: "Generate a secure packet for family members or professional advisors with clear access controls." },
];

const stats = [
  ["99.95%", "target platform uptime"],
  ["256-bit", "encryption in transit and at rest"],
  ["< 2 min", "typical first workspace setup"],
  ["24/7", "monitored infrastructure"],
];

const testimonials = [
  { name: "Maya Thompson", role: "Operations Director", quote: "Providence AI made our family planning conversations calmer. The checklist was clear, and our attorney received a much cleaner packet." },
  { name: "Daniel Reed", role: "Independent advisor", quote: "The product feels serious: secure access, audit history, and no sensational claims. It helps clients prepare without pretending to replace professional advice." },
  { name: "Elena Garcia", role: "Founder, family office consultancy", quote: "We use Providence AI to organize sensitive intake material before meetings. The interface is polished and the permission model is easy to explain." },
];

const faqs = [
  { q: "Does Providence AI provide legal, tax, or investment advice?", a: "No. Providence AI is an organization and collaboration platform. It helps prepare information for qualified professionals, but it does not replace attorneys, tax advisors, fiduciaries, or financial planners." },
  { q: "What types of documents can I organize?", a: "Families commonly store wills, trust summaries, deeds, insurance policies, account inventories, healthcare directives, emergency contacts, and notes for professional advisors." },
  { q: "How is my data protected?", a: "We use encrypted transport, encryption at rest, role-based access, session safeguards, audit logs, and vendor review processes designed for sensitive personal information." },
  { q: "Can I delete my data?", a: "Yes. Workspace owners can request deletion from the product or by contacting support. We retain limited records only where required for security, legal, or accounting obligations." },
  { q: "Is this suitable for Google Ads and regulated categories?", a: "The site avoids misleading claims and explains that the product is software, not a guaranteed legal or financial outcome. Paid campaigns should still be reviewed against local policy and targeting rules." },
  { q: "Who is Providence AI built for?", a: "It is built for families, executors, independent advisors, estate-planning teams, and operations leaders who need a secure way to prepare and coordinate legacy planning materials." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  publisher: { "@type": "Organization", name: site.legalName, email: site.email },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg opacity-70" />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <ShieldCheckIcon className="size-4" /> Secure AI workspace for legacy planning
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Organize the future of your family with <span className="text-gradient">trusted AI guidance</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Providence AI turns sensitive estate and legacy planning materials into a secure, advisor-ready workspace—without hype, pressure, or misleading promises.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white shadow-2xl shadow-indigo-900/20 transition hover:-translate-y-1 hover:bg-indigo-700">
                Request a product demo <ArrowRightIcon className="size-4" />
              </Link>
              <Link href="#features" className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-7 py-4 font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700">
                Explore features
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="font-semibold text-slate-800">Trusted workflow patterns for</span>
              <span>families</span><span>•</span><span>advisors</span><span>•</span><span>estate teams</span>
            </div>
          </div>
          <div className="glass relative rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div><p className="text-sm text-cyan-200">Workspace health</p><p className="text-2xl font-semibold">Legacy Plan Review</p></div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Encrypted</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[["Documents", "84% complete"], ["Beneficiaries", "Needs review"], ["Advisor packet", "Ready"], ["Access", "3 active roles"]].map(([a,b]) => (
                  <div key={a} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                    <p className="text-sm text-slate-300">{a}</p><p className="mt-2 font-semibold">{b}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
                <div className="flex items-center gap-3"><SparklesIcon className="size-5 text-indigo-600" /><p className="font-semibold">AI readiness summary</p></div>
                <p className="mt-3 text-sm leading-6 text-slate-600">Three documents need updated signatures. Healthcare directive and emergency contacts are complete. Recommended next step: review asset inventory with an attorney.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container py-16" id="features">
        <div className="mx-auto max-w-3xl text-center"><p className="font-semibold text-indigo-700">Product capabilities</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Everything needed for a credible planning workflow.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Built to reduce confusion, improve preparation, and protect sensitive family information.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => { const Icon = feature.icon; return <article key={feature.title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-2xl"><Icon className="size-7 text-indigo-600" /><h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{feature.copy}</p></article>; })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-16" id="workflow">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><p className="font-semibold text-indigo-700">How it works</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">A calm onboarding flow for sensitive decisions.</h2><p className="mt-5 text-lg leading-8 text-slate-600">The experience is intentionally transparent: collect, organize, review, and share with qualified professionals.</p></div>
          <div className="space-y-4">
            {steps.map((step, i) => <div key={step.title} className="glass rounded-3xl p-6"><div className="flex gap-5"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-indigo-600 font-bold text-white">{i+1}</span><div><h3 className="text-xl font-semibold text-slate-950">{step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.copy}</p></div></div></div>)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-16" id="security">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><p className="font-semibold text-cyan-200">Trust, security, and policy-safe transparency</p><h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Designed for sensitive information and realistic expectations.</h2><p className="mt-5 text-lg leading-8 text-slate-300">Providence AI avoids exaggerated outcomes and gives users clear control over data, access, and professional collaboration.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[[ShieldCheckIcon,"Encryption-first architecture"],[FingerPrintIcon,"Role-based permissions"],[ClockIcon,"Audit trails and access history"],[CheckCircleIcon,"Clear legal and privacy pages"]].map(([Icon,label]) => { const I = Icon as typeof ShieldCheckIcon; return <div key={label as string} className="rounded-3xl border border-white/10 bg-white/8 p-5"><I className="size-7 text-cyan-200" /><p className="mt-4 font-semibold">{label as string}</p></div>; })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([value,label]) => <div key={label} className="glass rounded-3xl p-7 text-center"><p className="text-4xl font-semibold tracking-tight text-slate-950">{value}</p><p className="mt-2 text-sm text-slate-600">{label}</p></div>)}</div>
      </AnimatedSection>

      <AnimatedSection className="container py-16">
        <div className="mx-auto max-w-3xl text-center"><p className="font-semibold text-indigo-700">Customer signal</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">What thoughtful teams value.</h2></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{testimonials.map((t) => <figure key={t.name} className="glass rounded-3xl p-7"><blockquote className="leading-7 text-slate-700">“{t.quote}”</blockquote><figcaption className="mt-6 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 font-bold text-white">{t.name.split(' ').map(n=>n[0]).join('')}</div><div><p className="font-semibold text-slate-950">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></div></figcaption></figure>)}</div>
      </AnimatedSection>

      <AnimatedSection className="container py-16" id="faq">
        <div className="mx-auto max-w-3xl text-center"><p className="font-semibold text-indigo-700">FAQ</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Clear answers before you begin.</h2></div>
        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white/75 p-2 shadow-xl shadow-slate-900/5">
          {faqs.map((faq) => <details key={faq.q} className="group p-5"><summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">{faq.q}</summary><p className="mt-3 leading-7 text-slate-600">{faq.a}</p></details>)}
        </div>
      </AnimatedSection>

      <section className="container pb-24 pt-10">
        <div className="glass rounded-[2rem] p-8 text-center sm:p-12"><h2 className="text-4xl font-semibold tracking-tight text-slate-950">Build a planning workspace people can trust.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">See how Providence AI helps families and advisors turn scattered documents into a secure, structured process.</p><Link href="/contact" className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-indigo-700">Request demo</Link></div>
      </section>
    </main>
  );
}
