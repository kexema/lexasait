import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "Learn about Providence AI, our product principles, and our approach to secure estate planning workflows." };

const values = [
  ["Clarity over pressure", "We avoid fake urgency and sensational promises. Users deserve understandable workflows for serious decisions."],
  ["Professionals stay central", "Providence AI prepares information for qualified advisors; it does not pretend to replace legal, tax, or fiduciary expertise."],
  ["Privacy by design", "Sensitive documents require careful permissions, encryption, auditability, and plain-language data practices."],
];

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About Providence AI" title="A serious product for serious family planning." copy="Providence AI Labs builds secure workflow software that helps families and professional advisors organize sensitive estate and legacy planning materials." />
      <section className="container pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map(([title, copy]) => <article key={title} className="glass rounded-3xl p-7"><h2 className="text-xl font-semibold text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}
        </div>
        <div className="glass mt-8 rounded-[2rem] p-8 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Company information</h2>
          <p className="mt-4 leading-7 text-slate-600">{site.legalName} is a software company focused on secure organization, collaboration, and readiness workflows for estate planning preparation. The product is not a law firm and does not provide legal, tax, financial, or investment advice.</p>
          <p className="mt-4 leading-7 text-slate-600">Business address: {site.address}. General inquiries: <a className="font-medium text-indigo-700 underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </main>
  );
}
