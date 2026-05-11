export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="container py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold text-indigo-700">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{copy}</p>
      </div>
    </section>
  );
}
