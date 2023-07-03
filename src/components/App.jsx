import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './form/Form';
// import ContactList from './contactList/ContactList';
// import './App.module.css';

export default class App extends Component {
  // model.id = nanoid();
  state = {
    contacts: [],
  };

  formSubmitData = data => {
    // console.log(data);
    const item = {
      id: nanoid(),
      ...data,
    };
    console.log(item);
  };

  render() {
    // const { contacts} = this.state;

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitData} />

          <h2>Contacts</h2>
          {/* <Filter /> */}
          {/* <ContactList contacts={data} /> */}
        </div>
      </>
    );
  }
}
