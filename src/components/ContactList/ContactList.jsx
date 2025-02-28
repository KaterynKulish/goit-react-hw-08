import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContactsMemo } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.person}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
