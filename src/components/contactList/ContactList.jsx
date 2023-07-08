import React from 'react';

const ContactList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}:{item.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
