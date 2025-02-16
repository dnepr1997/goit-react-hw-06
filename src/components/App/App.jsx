import css from './App.module.css';
import { useState, useEffect } from 'react';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contactsStorage');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  const filterSearch = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const addUser = newUser => {
    console.log(newUser);
    setContacts(prevUsers => {
      return [...prevUsers, { id: nanoid(), ...newUser }];
    });
  };

  const deleteUser = userId => {
    setContacts(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  return (
    <div className={css.form}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox SearchValue={inputValue} SearchOnChange={evt => setInputValue(evt.target.value)} />
      <ContactList contactsItems={filterSearch} onDelete={deleteUser} />
    </div>
  );
};
