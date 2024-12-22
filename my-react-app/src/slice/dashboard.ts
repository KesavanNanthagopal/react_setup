import { createSlice } from '@reduxjs/toolkit';
import {
  createApiThunk,
  fetchOverviewApi,
  // fetchStatisticsApi,
  // fetchRecentActivitiesApi,
} from '../api/apiHelpers';

interface DashboardState {
  overview: any | null;
  statistics: any | null;
  recentActivities: any[] | null;
  loading: boolean;
  error: string | null;
  specificLoading: { [key: string]: boolean };
}

const initialState: DashboardState = {
  overview: null,
  statistics: null,
  recentActivities: null,
  loading: false,
  error: null,
  specificLoading: {},
};

export const fetchOverview = createApiThunk<Record<string, unknown>, any>(
  'dashboard/fetchOverview',
  fetchOverviewApi
);

// export const fetchStatistics = createApiThunk<Record<string, unknown>, any>(
//   'dashboard/fetchStatistics',
//   fetchStatisticsApi
// );

// export const fetchRecentActivities = createApiThunk<Record<string, unknown>, any[]>(
//   'dashboard/fetchRecentActivities',
//   fetchRecentActivitiesApi
// );

// Create the slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Overview
    builder
      .addCase(fetchOverview.pending, (state) => {
        state.specificLoading['overview'] = true;
        state.error = null;
      })
      .addCase(fetchOverview.fulfilled, (state, action) => {
        state.specificLoading['overview'] = false;
        state.overview = action.payload;
      })
      .addCase(fetchOverview.rejected, (state, action) => {
        state.specificLoading['overview'] = false;
        state.error = action.payload as string;
      });

    // // Fetch Statistics
    // builder
    //   .addCase(fetchStatistics.pending, (state) => {
    //     state.specificLoading['statistics'] = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchStatistics.fulfilled, (state, action) => {
    //     state.specificLoading['statistics'] = false;
    //     state.statistics = action.payload;
    //   })
    //   .addCase(fetchStatistics.rejected, (state, action) => {
    //     state.specificLoading['statistics'] = false;
    //     state.error = action.payload as string;
    //   });

    // // Fetch Recent Activities
    // builder
    //   .addCase(fetchRecentActivities.pending, (state) => {
    //     state.specificLoading['recentActivities'] = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchRecentActivities.fulfilled, (state, action) => {
    //     state.specificLoading['recentActivities'] = false;
    //     state.recentActivities = action.payload;
    //   })
    //   .addCase(fetchRecentActivities.rejected, (state, action) => {
    //     state.specificLoading['recentActivities'] = false;
    //     state.error = action.payload as string;
    //   });
  },
});

export default dashboardSlice.reducer;
