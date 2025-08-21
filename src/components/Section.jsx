export default function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {kicker && <div className="mb-2"><span className="text-voltex/90 text-sm">{kicker}</span></div>}
        {title && <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
