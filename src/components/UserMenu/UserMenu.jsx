import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUserThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {user.name}</p>

      <button type="button" onClick={() => dispatch(logoutUserThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
