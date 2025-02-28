import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.text}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
