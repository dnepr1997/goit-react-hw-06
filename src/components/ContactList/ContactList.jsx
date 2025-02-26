import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const filterData = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterData.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
