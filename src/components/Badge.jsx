export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-voltex/40 bg-base-800/60 px-3 py-1 text-xs text-voltex">
      <span className="h-1.5 w-1.5 rounded-full bg-voltex"></span>
      {children}
    </span>
  );
}
