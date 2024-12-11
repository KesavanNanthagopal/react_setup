import { createSlice } from '@reduxjs/toolkit';
import { createApiThunk, loginExample } from '../api/apiHelpers';

interface LoginState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchExampleData = createApiThunk<Record<string, unknown>, any[]>(
  'example/fetchData',
  loginExample
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExampleData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExampleData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExampleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loginSlice.reducer;
