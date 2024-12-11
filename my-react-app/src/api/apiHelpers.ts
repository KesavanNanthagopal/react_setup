import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';
import { loginApi } from '../utils/endPoint';

interface ThunkApiConfig {
    rejectValue: unknown;
}

export const createApiThunk = <Args, Result>(
    type: string,
    apiCall: (args: Args) => Promise<Result>
) =>
    createAsyncThunk<Result, Args, ThunkApiConfig>(type, async (args, { rejectWithValue }) => {
        try {
            const response = await apiCall(args);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    });

export const loginExample = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(loginApi, { params });
    return response.data;
};
