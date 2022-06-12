export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>{number}</p>
      <button type="submit" onClick={() => onDeleteContact(id)}>
        delete contact
      </button>
    </li>
  );
}
