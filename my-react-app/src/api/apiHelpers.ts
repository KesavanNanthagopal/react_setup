import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance';
import { categoryAdd, categoryDelete, categoryList, categoryUpdate, dashboardOverviewApi, dashboardRecentActivitiesApi, dashboardStatisticsApi, loginApi, menuAdd, menuDelete, menuDetails, menuList, menuUpdate, orderAccept, orderDetails, orderList, orderReject } from '../utils/endPoint';

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


//----------------------------------- Category -------------------------------------------------

export const categoryListApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(categoryList, { params });
    return response.data;
};

export const categoryAddApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(categoryAdd, { params });
    return response.data;
};

export const categoryUpdateApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(categoryUpdate, { params });
    return response.data;
};
export const categoryDetailsApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(categoryDelete, { params });
    return response.data;
};


//------------------------------------- Dashboard ------------------------------------------------

export const fetchOverviewApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(dashboardOverviewApi, { params });
    return response.data;
};

export const fetchStatisticsApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(dashboardStatisticsApi, { params });
    return response.data;
};

export const fetchRecentActivitiesApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(dashboardRecentActivitiesApi, { params });
    return response.data;
};

//------------------------------------ Menu --------------------------------------------------------


export const fetchMenuListApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(menuList, { params });
    return response.data;
};

export const addMenuApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(menuAdd, { params });
    return response.data;
};

export const updateMenuApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(menuUpdate, { params });
    return response.data;
};
export const fetchMenuDetailApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(menuDelete, { params });
    return response.data;
};

export const deleteMenuApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(menuDetails, { params });
    return response.data;
};

//-------------------------- order ------------------------------------------------------

export const fetchOrderListApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.get(orderList, { params });
    return response.data;
};

export const fetchOrderDetailsApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(orderDetails, { params });
    return response.data;
};

export const acceptOrderApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(orderAccept, { params });
    return response.data;
};
export const rejectOrderApi = async (params: Record<string, unknown>) => {
    const response = await axiosInstance.post(orderReject, { params });
    return response.data;
};