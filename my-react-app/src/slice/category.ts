import { createSlice } from '@reduxjs/toolkit';
import { createApiThunk, categoryListApi, categoryAddApi, categoryUpdateApi, categoryDetailsApi } from '../api/apiHelpers';

interface CategoryState {
  data: any[];
  details: any | null;
  loading: boolean;
  error: string | null;
  operationLoading: boolean;
}

const initialState: CategoryState = {
  data: [],
  details: null,
  loading: false,
  error: null,
  operationLoading: false,
};

// Define thunks for each API
export const fetchCategories = createApiThunk<Record<string, unknown>, any[]>(
  'category/fetchCategories',
  categoryListApi
);

export const addCategory = createApiThunk<Record<string, unknown>, any>(
  'category/addCategory',
  categoryAddApi
);

export const updateCategory = createApiThunk<Record<string, unknown>, any>(
  'category/updateCategory',
  categoryUpdateApi
);

export const fetchCategoryDetails = createApiThunk<Record<string, unknown>, any>(
  'category/fetchCategoryDetails',
  categoryDetailsApi
);

// Create the slice
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Add Category
    builder
      .addCase(addCategory.pending, (state) => {
        state.operationLoading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.operationLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.operationLoading = false;
        state.error = action.payload as string;
      });

    // Update Category
    builder
      .addCase(updateCategory.pending, (state) => {
        state.operationLoading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.operationLoading = false;
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.operationLoading = false;
        state.error = action.payload as string;
      });

    // Fetch Category Details
    builder
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
