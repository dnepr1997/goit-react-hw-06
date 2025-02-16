import { IoCall } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';
export const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <IoPerson /> {contact.name}
        </p>
        <p>
          {' '}
          <IoCall /> {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};
