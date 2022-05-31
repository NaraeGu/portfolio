import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = 'http://www.pettravel.kr/api/listPart.do';

export const getPetTravel = createAsyncThunk('PetTravelSlice/getPetTravel', async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(API_URL, {
            params: {
                partCode: payload.partCode ? payload.partCode : 'PC01',
                page: payload.page ? payload.page : 1,
                pageBlock: payload.pageBlock ? payload.pageBlock : 10,
            },
        });
    } catch(err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const PetTravelSlice = createSlice({
    name: 'pettravel',
    initialState: {
        resultList: null,         
        totalCount: null,         
        loading: false,     
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getPetTravel.pending]: (state, { payload }) => {
            return {...state, loading: true }
        },
        [getPetTravel.fulfilled]: (state, { payload }) => {
            return {
                resultList: payload?.data[0].resultList,         
                totalCount: payload?.data[0].totalCount,   
                loading: false,
                error: null
            }
        },
        [getPetTravel.rejected]: (state, { payload }) => {
            return {
                resultList: null,         
                totalCount: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

export default PetTravelSlice.reducer;