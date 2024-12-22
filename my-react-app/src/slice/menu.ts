import { createSlice } from '@reduxjs/toolkit';
import {
  createApiThunk,
  fetchMenuListApi,
  addMenuApi,
  updateMenuApi,
  fetchMenuDetailApi,
  deleteMenuApi,
} from '../api/apiHelpers';

interface MenuState {
  list: any[];
  details: any | null;
  loading: boolean; // General loading state
  error: string | null; // Error message
  operationLoading: { [key: string]: boolean }; // Loading states for specific operations
}

const initialState: MenuState = {
  list: [],
  details: null,
  loading: false,
  error: null,
  operationLoading: {},
};

// Define thunks for each CRUD operation
export const fetchMenuList = createApiThunk<Record<string, unknown>, any[]>(
  'menu/fetchMenuList',
  fetchMenuListApi
);

export const addMenu = createApiThunk<Record<string, unknown>, any>(
  'menu/addMenu',
  addMenuApi
);

export const updateMenu = createApiThunk<Record<string, unknown>, any>(
  'menu/updateMenu',
  updateMenuApi
);

export const fetchMenuDetails = createApiThunk<Record<string, unknown>, any>(
  'menu/fetchMenuDetails',
  fetchMenuDetailApi
);

export const deleteMenu = createApiThunk<{ id: string }, { id: string }>(
  'menu/deleteMenu',
  deleteMenuApi
);

// Create the slice
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Menu List
    builder
      .addCase(fetchMenuList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMenuList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Add Menu
    builder
      .addCase(addMenu.pending, (state) => {
        state.operationLoading['add'] = true;
        state.error = null;
      })
      .addCase(addMenu.fulfilled, (state, action) => {
        state.operationLoading['add'] = false;
        state.list.push(action.payload);
      })
      .addCase(addMenu.rejected, (state, action) => {
        state.operationLoading['add'] = false;
        state.error = action.payload as string;
      });

    // Update Menu
    builder
      .addCase(updateMenu.pending, (state) => {
        state.operationLoading['update'] = true;
        state.error = null;
      })
      .addCase(updateMenu.fulfilled, (state, action) => {
        state.operationLoading['update'] = false;
        const index = state.list.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(updateMenu.rejected, (state, action) => {
        state.operationLoading['update'] = false;
        state.error = action.payload as string;
      });

    // Fetch Menu Details
    builder
      .addCase(fetchMenuDetails.pending, (state) => {
        state.operationLoading['details'] = true;
        state.error = null;
      })
      .addCase(fetchMenuDetails.fulfilled, (state, action) => {
        state.operationLoading['details'] = false;
        state.details = action.payload;
      })
      .addCase(fetchMenuDetails.rejected, (state, action) => {
        state.operationLoading['details'] = false;
        state.error = action.payload as string;
      });

    // Delete Menu
    builder
      .addCase(deleteMenu.pending, (state) => {
        state.operationLoading['delete'] = true;
        state.error = null;
      })
      .addCase(deleteMenu.fulfilled, (state, action) => {
        state.operationLoading['delete'] = false;
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteMenu.rejected, (state, action) => {
        state.operationLoading['delete'] = false;
        state.error = action.payload as string;
      });
  },
});

export default menuSlice.reducer;
