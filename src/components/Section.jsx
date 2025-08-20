export default function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <div className="container-xl">
        {kicker && <div className="mb-2"><span className="text-voltex/90 text-sm">{kicker}</span></div>}
        {title && <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
