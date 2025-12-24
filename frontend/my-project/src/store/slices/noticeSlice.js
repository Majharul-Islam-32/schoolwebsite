import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noticeService } from '../../services/noticeService';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await noticeService.getAll();
      return Array.isArray(response) ? response : [];
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch notices');
    }
  }
);

const noticeSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetched: null,
  },
  reducers: {
    clearNotices: (state) => {
      state.items = [];
      state.lastFetched = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNotices } = noticeSlice.actions;
export default noticeSlice.reducer;
