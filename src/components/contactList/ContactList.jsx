import React from 'react';
import ElementList from '../elementList';
import css from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.ul}>
        {items.map(item => (
          <ElementList
            item={item}
            key={item.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
