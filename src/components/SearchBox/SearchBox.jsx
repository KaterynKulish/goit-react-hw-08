import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.search}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
