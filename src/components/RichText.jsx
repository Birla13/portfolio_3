/**
 * Renders a string where **double asterisks** mark bold text.
 * "auditing **15+ workflows** today" → auditing <strong>15+ workflows</strong> today
 */
export default function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}
