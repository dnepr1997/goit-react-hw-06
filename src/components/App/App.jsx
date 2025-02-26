import css from './App.module.css';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';

export const App = () => {
  return (
    <div className={css.form}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
