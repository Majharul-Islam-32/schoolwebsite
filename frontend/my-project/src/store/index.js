import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './slices/eventSlice';
import noticeReducer from './slices/noticeSlice';

export const store = configureStore({
  reducer: {
    events: eventReducer,
    notices: noticeReducer,
  },
});

export default store;
