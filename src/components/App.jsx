import React, { useState, useEffect } from 'react';
import ContactForm from './organisms/Form/Form';
import Title from './atoms/Title/Title';
import Filter from './atoms/Input/Input';
import ContactsList from './atoms/ContactsList/ContactsList';
import { StyledWrapper } from './organisms/Form/Form.styled';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContact] = useState(
    JSON.parse(localStorage.getItem('Contacts')) || initialValues
  );

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContact(prevContacts => [data, ...prevContacts]);
    setFilter('');
  };

  const onSearch = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const deleteContact = id => {
    setContact(contacts.filter(contact => contact.id !== id));
  };

  const displayedContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  };

  return (
    <StyledWrapper>
      <Title headerTitle="Phonebook" />
      <ContactForm onSubmit={onSubmit} />
      <Title headerTitle="Contacts" />
      <Title headerTitle="Find contacts by name" />
      <Filter
        type="text"
        name="search"
        value={filter}
        onChange={onSearch}
        required={false}
      />

      {(contacts.length === 0) & (filter.length === 0) ? (
        <p>No contacts in the list</p>
      ) : null}

      {displayedContacts().length === 0 && filter.length > 0 ? (
        <p>No results for your search</p>
      ) : (
        <ContactsList
          displayedContacts={displayedContacts()}
          onClick={deleteContact}
        />
      )}
    </StyledWrapper>
  );
};

export default App;
