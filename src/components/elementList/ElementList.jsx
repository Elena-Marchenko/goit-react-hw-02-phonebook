import React from 'react';

const ElementList = ({ item, onDeleteContact }) => (
  <li>
    <p>
      {item.name}:{item.number}
    </p>
    <button onClick={() => onDeleteContact(item.id)}>Delete</button>
  </li>
);
export default ElementList;
