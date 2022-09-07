import React from 'react';
import ListItem from '../ContactsListItem/ContactsListItem';
import { StyledList } from './ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../redux/phoneBookActions";
import { getVisibleContacts } from "../../../redux/phoneBookSelectors";

const ContactsList = (state) => {
  const displayedContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = (id) => dispatch(remove(id));

  return (
    <>
      <StyledList>
        {displayedContacts?.map(contact => (
          <ListItem key={contact.id} contact={contact} onClick={onDelete} />
        ))}
      </StyledList>
    </>
  );
};

export default ContactsList;
