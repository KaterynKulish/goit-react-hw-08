import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { seletsIsLoggedIn } from '../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(seletsIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
