import React from 'react';
import ContactForm from './organisms/Form/Form';
import Title from './atoms/Title/Title';
import Filter from './atoms/Filter/Filter';
import { StyledWrapper } from './organisms/Form/Form.styled';
import ContactsList from "./atoms/ContactsList/ContactsList";

const App = () => {
  return (
    <StyledWrapper>
      <Title headerTitle="Phonebook" />
      <ContactForm />
      <Title headerTitle="Contacts" />
      <Title headerTitle="Find contacts by name" />
      <Filter />
      <ContactsList />
    </StyledWrapper>
  );
};

export default App;
