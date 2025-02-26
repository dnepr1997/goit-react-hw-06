import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { setFilter } from '../../redux/filtersSlice';

export const SearchBox = ({ SearchValue }) => {
  const searchId = useId();

  const dispatch = useDispatch();
  const handleClick = event => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <form onSubmit={handleClick}>
      <div className={css.search}>
        <label htmlFor={searchId}>Find contacts by name</label>
        <input
          type="text"
          id={searchId}
          placeholder="Search"
          value={SearchValue}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </div>
    </form>
  );
};
