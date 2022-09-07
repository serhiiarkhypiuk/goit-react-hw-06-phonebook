export const getContacts = (state) => state.contacts.contactsReducer;
export const getFilter = (state) => state.contacts.filterReducer;

export const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name?.toLowerCase().includes(normalizedFilter)
  );
};
