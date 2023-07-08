import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
// import './App.module.css';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const item = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, item],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalaizFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalaizFilter) ||
        contact.number.toLowerCase().includes(normalaizFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList items={visibleContacts} />
      </>
    );
  }
}
export default App;

// export default class App extends Component {
//   // model.id = nanoid();
//   state = {
//     contacts: [],
//   };

//   formSubmitData = data => {
//     // console.log(data);
//     const item = {
//       id: nanoid(),
//       ...data,
//     };
//     console.log(item);
//   };

//   render() {
//     // const { contacts} = this.state;

//     return (
//       <>
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.formSubmitData} />

//           <h2>Contacts</h2>
//           {/* <Filter /> */}
//           {/* <ContactList contacts={data} /> */}
//         </div>
//       </>
//     );
//   }
// }
