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

export const loginData = createApiThunk<Record<string, unknown>, any[]>(
  'example/fetchData',
  loginExample
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loginSlice.reducer;
