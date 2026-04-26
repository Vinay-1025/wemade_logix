import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/interns';

export const registerIntern = createAsyncThunk(
  'interns/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchInterns = createAsyncThunk(
  'interns/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const internSlice = createSlice({
  name: 'interns',
  initialState: {
    list: [],
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    addInternFromSocket: (state, action) => {
      state.list.unshift(action.payload);
    },
    resetSuccess: (state) => {
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerIntern.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerIntern.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // The socket will handle adding it to the list if we are listening
      })
      .addCase(registerIntern.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
      })
      .addCase(fetchInterns.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export const { addInternFromSocket, resetSuccess } = internSlice.actions;
export default internSlice.reducer;
