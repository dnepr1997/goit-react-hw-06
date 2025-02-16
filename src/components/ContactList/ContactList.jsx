import { Contact } from '../Contact/Contact';
export const ContactList = ({ contactsItems, onDelete }) => {
  return (
    <ul>
      {contactsItems.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
