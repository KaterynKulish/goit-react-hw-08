import { Blocks } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contactsSlice';

const Loader = () => {
  const loader = useSelector(selectLoading);
  return (
    <Blocks
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      visible={loader}
    />
  );
};

export default Loader;
