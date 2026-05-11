import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", description: "Providence AI Terms of Service for acceptable use, disclaimers, and product access." };

const sections = [
  ["Use of the service", "You may use Providence AI to organize, review, and share planning information in accordance with these terms and applicable law."],
  ["No professional advice", "Providence AI is software. It does not provide legal, tax, financial, medical, or investment advice and does not guarantee any planning outcome."],
  ["User responsibilities", "You are responsible for the accuracy of information you upload, permissions you grant, and decisions you make with qualified professionals."],
  ["Acceptable use", "Do not misuse the service, attempt unauthorized access, upload unlawful content, or use the product to mislead others."],
  ["Availability", "We work to provide a reliable service but may modify, suspend, or discontinue features for maintenance, security, legal, or product reasons."],
  ["Limitation of liability", "To the maximum extent permitted by law, Providence AI is not liable for indirect, incidental, special, consequential, or punitive damages."],
  ["Changes", "We may update these terms. Material changes will be communicated through reasonable channels, and continued use means acceptance of updated terms."],
];

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="Terms of Service" title="Clear terms for responsible product use." copy="These terms provide a production-ready policy foundation and should be reviewed by counsel before launch in any regulated market." />
      <section className="container pb-24">
        <div className="glass mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm text-slate-500">Effective date: May 11, 2026</p>
          {sections.map(([title, copy]) => <section key={title} className="mt-8"><h2 className="text-2xl font-semibold text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></section>)}
          <section className="mt-8"><h2 className="text-2xl font-semibold text-slate-950">Contact</h2><p className="mt-3 leading-7 text-slate-600">Questions about these terms can be sent to <a className="text-indigo-700 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.</p></section>
        </div>
      </section>
    </main>
  );
}
