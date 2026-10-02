/** A small status label. tone – "ok" (green), "info" (blue), "accent" (orange) or "note" (grey) */
export default function Pill({ tone = "note", children }) {
  return <span className={`cs-pill cs-pill--${tone}`}>{children}</span>;
}
