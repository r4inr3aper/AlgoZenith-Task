// Features/PageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: 'Dashboard', 
  reducers: {
    changePage: (state, action) => action.payload,
  },
});

export const { changePage } = pageSlice.actions; 
export default pageSlice.reducer;
