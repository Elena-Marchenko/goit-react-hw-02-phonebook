import React from 'react';
import css from './ElenentList.module.css';

const ElementList = ({ item, onDeleteContact }) => (
  <li className={css.li}>
    <p>
      {item.name}:{item.number}
    </p>
    <button onClick={() => onDeleteContact(item.id)} className={css.button}>
      Delete
    </button>
  </li>
);
export default ElementList;
