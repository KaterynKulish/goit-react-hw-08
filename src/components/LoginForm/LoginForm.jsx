import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../redux/auth/operations';
import { replace, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { selectUser } from '../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    dispatch(loginUserThunk(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/contacts'), { replace: true };
      })
      .catch(() => toast.error('Invalid data'));

    // options.resetform();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>

          <label>
            <span>Password:</span>
            <Field name="password" />
          </label>

          <button type="submit">LogIn</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
