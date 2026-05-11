import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "Providence AI Privacy Policy explaining data collection, use, security, retention, and user rights." };

const sections = [
  ["Information we collect", "We collect account details, workspace content you upload, usage telemetry, support communications, and billing or administrative records when applicable."],
  ["How we use information", "We use information to provide the product, secure accounts, support users, improve reliability, comply with law, and communicate about service-related matters."],
  ["Cookies and analytics", "We use essential cookies for authentication and preference storage. Any analytics should be configured to minimize personal data and respect applicable consent requirements."],
  ["Sharing", "We do not sell personal information. We share data with vetted service providers, at your direction, or where required for legal, security, or compliance reasons."],
  ["Security", "We use encryption in transit, encryption at rest, access controls, logging, and operational safeguards appropriate for sensitive planning information."],
  ["Your rights", "Depending on your location, you may request access, correction, deletion, portability, or restriction of certain personal information by contacting us."],
  ["Retention", "We retain information for as long as needed to provide the service, meet legal obligations, resolve disputes, and maintain security records."],
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="Privacy Policy" title="Transparent data practices for sensitive information." copy="This policy explains how Providence AI handles personal information. It is written for clarity and should be reviewed with counsel before production launch." />
      <section className="container pb-24">
        <div className="glass mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm text-slate-500">Effective date: May 11, 2026</p>
          {sections.map(([title, copy]) => <section key={title} className="mt-8"><h2 className="text-2xl font-semibold text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></section>)}
          <section className="mt-8"><h2 className="text-2xl font-semibold text-slate-950">Contact</h2><p className="mt-3 leading-7 text-slate-600">Privacy requests can be sent to <a className="text-indigo-700 hover:underline" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or mailed to {site.address}.</p></section>
        </div>
      </section>
    </main>
  );
}
