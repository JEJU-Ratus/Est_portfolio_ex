export default function Nav({ data, activeId, onChangeMode }) {
  const lists = data.map(work => (
    <li key={work.id} className={work.id === activeId ? "active" : ""}>
      <button type="button" onClick={() => onChangeMode(work.id)}>
        {work.title}
      </button>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
