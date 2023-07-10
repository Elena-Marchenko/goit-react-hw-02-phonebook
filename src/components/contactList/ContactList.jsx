import React from 'react';
import ElementList from '../elementList/ElementList';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <div>
      <ul>
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
