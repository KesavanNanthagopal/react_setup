import { createSlice } from '@reduxjs/toolkit';
import {
  createApiThunk,
  fetchOrderListApi,
  fetchOrderDetailsApi,
  acceptOrderApi,
  rejectOrderApi,
} from '../api/apiHelpers';

interface OrderState {
  list: any[];
  details: any | null;
  loading: boolean; // General loading state
  error: string | null; // Error message
  operationLoading: { [key: string]: boolean }; // Loading states for specific operations
}

const initialState: OrderState = {
  list: [],
  details: null,
  loading: false,
  error: null,
  operationLoading: {},
};

// Define thunks for each API operation
export const fetchOrderList = createApiThunk<Record<string, unknown>, any[]>(
  'order/fetchOrderList',
  fetchOrderListApi
);

export const fetchOrderDetails = createApiThunk<{ id: string }, any>(
  'order/fetchOrderDetails',
  fetchOrderDetailsApi
);

export const acceptOrder = createApiThunk<{ id: string }, { id: string }>(
  'order/acceptOrder',
  acceptOrderApi
);

export const rejectOrder = createApiThunk<{ id: string }, { id: string }>(
  'order/rejectOrder',
  rejectOrderApi
);

// Create the slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Order List
    builder
      .addCase(fetchOrderList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchOrderList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch Order Details
    builder
      .addCase(fetchOrderDetails.pending, (state) => {
        state.operationLoading['details'] = true;
        state.error = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.operationLoading['details'] = false;
        state.details = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.operationLoading['details'] = false;
        state.error = action.payload as string;
      });

    // Accept Order
    builder
      .addCase(acceptOrder.pending, (state) => {
        state.operationLoading['accept'] = true;
        state.error = null;
      })
      .addCase(acceptOrder.fulfilled, (state, action) => {
        state.operationLoading['accept'] = false;
        const index = state.list.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.list[index].status = 'Accepted';
        }
      })
      .addCase(acceptOrder.rejected, (state, action) => {
        state.operationLoading['accept'] = false;
        state.error = action.payload as string;
      });

    // Reject Order
    builder
      .addCase(rejectOrder.pending, (state) => {
        state.operationLoading['reject'] = true;
        state.error = null;
      })
      .addCase(rejectOrder.fulfilled, (state, action) => {
        state.operationLoading['reject'] = false;
        const index = state.list.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.list[index].status = 'Rejected';
        }
      })
      .addCase(rejectOrder.rejected, (state, action) => {
        state.operationLoading['reject'] = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
