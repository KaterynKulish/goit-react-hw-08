import { useSelector } from 'react-redux';
import { seletsIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivatRoute = ({ children }) => {
  const isLoggedIn = useSelector(seletsIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivatRoute;
