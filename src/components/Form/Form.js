import { useState } from "react";
import { getContacts } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addContacts } from "../../redux/createSlice";
import { nanoid } from "nanoid";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = contacts.find(
      ({ contact }) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      alert("This name is already in the phonebook ");
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContacts(contact));
    }
    setName("");
    setNumber("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            required
          />
          <button type="button">Add contact</button>
        </label>
      </form>
    </>
  );
}
