import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteContacts } from "../../redux/createSlice";
import { getVisibleContacts } from "../../redux/selectors";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactsGallery() {
  const contacts = useSelector(getVisibleContacts);
  console.log("contacts", contacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={(id) => dispatch(deleteContacts(id))}
        />
      ))}
    </ul>
  );
}
