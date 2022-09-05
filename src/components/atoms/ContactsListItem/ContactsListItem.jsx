import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../Button/Button.styled';
import { StyledLI } from './ContactsListItem.styled';

const ListItem = ({ contact, onClick }) => {
  return (
    <StyledLI>
      {contact.name}: {contact.number}
      <StyledButton
        onClick={() => {
          onClick(contact.id);
        }}
        type="button"
      >
        Delete
      </StyledButton>
    </StyledLI>
  );
};

ListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
