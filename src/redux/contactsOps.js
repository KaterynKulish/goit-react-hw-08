// https://67bd9a8e321b883e790d2e4a.mockapi.io/contacts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67bd9a8e321b883e790d2e4a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts/', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
