import React, { useState } from 'react';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Title from 'components/atoms/Title/Title';
import { StyledForm } from './Form.styled';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const onChange = event =>
    event.currentTarget.name === 'name'
      ? setName(event.currentTarget.value)
      : setNumber(event.currentTarget.value);

  const handleAddContact = event => {
    event.preventDefault();

    const addedContact = {
      id: 'id-' + nanoid(2),
      name: name,
      number: number,
    };

    onSubmit(addedContact);
    resetContactForm();
  };

  const resetContactForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleAddContact}>
      <Title headerTitle="Name" />
      <Input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required={true}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
      <Title headerTitle="Number" />
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={true}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button btnText="Add contact" />
    </StyledForm>
  );
};

export default ContactForm;
