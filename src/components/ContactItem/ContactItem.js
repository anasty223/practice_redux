export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>{number}</p>
      <button onClick={onDeleteContact}>delete contact</button>
    </li>
  );
}
