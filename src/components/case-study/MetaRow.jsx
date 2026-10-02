/** Project facts under the case study title. items – [[label, value]] */
export default function MetaRow({ items }) {
  return (
    <dl className="cs-meta">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
