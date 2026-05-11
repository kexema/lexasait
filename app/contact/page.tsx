import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Providence AI for product demos, support, privacy requests, and company inquiries." };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Talk with our product team." copy="Use the contact details below for demo requests, support questions, privacy requests, or company inquiries. We typically respond within two business days." />
      <section className="container pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Contact details</h2>
            <dl className="mt-6 space-y-5 text-slate-600">
              <div><dt className="font-semibold text-slate-950">General</dt><dd><a className="text-indigo-700 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt className="font-semibold text-slate-950">Support</dt><dd><a className="text-indigo-700 hover:underline" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></dd></div>
              <div><dt className="font-semibold text-slate-950">Address</dt><dd>{site.address}</dd></div>
            </dl>
          </div>
          <form className="glass rounded-[2rem] p-8" aria-label="Demo request form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">Name<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500" name="name" autoComplete="name" /></label>
              <label className="text-sm font-medium text-slate-700">Work email<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500" name="email" type="email" autoComplete="email" /></label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">Company or team<input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500" name="company" autoComplete="organization" /></label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">Message<textarea className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500" name="message" /></label>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500">This static demo form is ready to connect to your preferred CRM or form endpoint. Do not submit sensitive personal documents through this form.</p>
            <button type="button" className="mt-6 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">Prepare demo request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
