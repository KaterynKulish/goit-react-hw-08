import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();

  const onSubmit = (values, option) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    option.resetForm();
  };

  const re = /^\+?\d{1,4}[-.\s]?\d{10,15}$/;

  const applySchema = Yup.object().shape({
    name: Yup.string().required('Required!').min('2', 'Min 2 символи'),
    number: Yup.string()
      .required('Required!')
      .matches(re, 'Не коректний номер телефону'),
  });

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={applySchema}
      >
        {({ values }) => (
          <Form className={s.form}>
            <label htmlFor="name" className={s.label}>
              Name
            </label>
            <Field name="name" type="string" id="name" />
            <ErrorMessage className={s.error} component="p" name="name" />

            <label htmlFor="number">Number</label>
            <Field name="number" type="tel" id="number" />
            <ErrorMessage className={s.error} component="p" name="number" />

            <button disabled={!values} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
