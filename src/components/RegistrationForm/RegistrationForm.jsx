import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(registerUserThunk(values));
    //   options.resetForm()
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>

          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>

          <label>
            <span>Password:</span>
            <Field name="password" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
