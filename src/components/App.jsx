import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './form/Form';
// import ContactForm from './form/Form';
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

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList items={this.state.contacts} />
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
