export default function Card({ topic, author, onDelete, id }) {
  return (
    <ul>
      <li>
        <h2>{topic}</h2>
        <p>{author}</p>
        <button type="submit" onClick={() => onDelete(id)}>
          -
        </button>
      </li>
    </ul>
  );
}
