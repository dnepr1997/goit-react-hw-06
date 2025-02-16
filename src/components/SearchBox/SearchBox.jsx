import css from './SearchBox.module.css';
import { useId } from 'react';

export const SearchBox = ({ SearchValue, SearchOnChange }) => {
  const searchId = useId();

  const hendleClick = event => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <form onSubmit={hendleClick}>
      <div className={css.search}>
        <label htmlFor={searchId}>Find contacts by name</label>
        <input
          type="text"
          id={searchId}
          placeholder="Search"
          value={SearchValue}
          onChange={SearchOnChange}
        />
      </div>
    </form>
  );
};
