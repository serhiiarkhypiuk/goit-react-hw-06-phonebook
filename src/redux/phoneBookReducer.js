import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { create, remove, filter } from './phoneBookActions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialContacts, {
  [create]: (state, action) => {
    const result = state.some((contact) => contact.name === action.payload.name)
    if (result) {
      alert(`${action.payload.name} is already in contacts`);
    } else {
      return [...state, action.payload]
    }
  },

  [remove]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filterReducer = createReducer('', {
  [filter]: (_, action ) => action.payload,
});

export default combineReducers({
  contactsReducer,
  filterReducer,
});
