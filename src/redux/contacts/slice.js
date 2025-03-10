import { createSelector, createSlice } from '@reduxjs/toolkit';

import { addContact, deleteContact, fetchContacts } from './operations';
import { logoutUserThunk } from '../auth/operations';
import { selectContacts } from './selectors';
import { selectNameFilter } from '../filter/selectors';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        deleteContact.rejected,
        (state, action) => (state.loading = false)
      )
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export const contactReducer = slice.reducer;
