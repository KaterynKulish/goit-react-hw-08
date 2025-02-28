import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import Loader from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { selectError } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Loader />
      <SearchBox />
      <ContactList />
      <Toaster />
    </>
  );
};

export default App;
