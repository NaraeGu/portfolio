import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = {
    travel: 'https://api.odcloud.kr/api/15003416/v1/uddi:a635e6c7-82cf-4714-b002-c7cf4cb20121_201609071527'
}

const API_KEY = '25xx4Ka1f5ykn751v+LECo4HRPFEs02Gnpw9tMtmgyBL7RQQFjdF/yDAir2XKz/0Qbq43z30RvBpLtTMh887BQ==';

/** 비동기 처리 함수 구현 */
export const TravelList = createAsyncThunk("TravelSlice/TravelList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        result = await axios.get(API_URL[payload.api ? payload.api : 'travel'], {
            params: {
                page: payload.page ? payload.page : 1,
                perPage: payload.perPage ? payload.perPage : 120,
            },
            headers: { Authorization: `Infuser ${API_KEY}` }
        });
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

/** Slice 정의 (Action 함수 + Reducer의 개념) */
const TravleSlice = createSlice ({ 
    name: 'Travel',
    initialState: {
        data: null,
        loading: false, 
        error: null 
    },
    // 내부 action 및 동기 action
    reducers: {},
    // 외부 acrion 및 비동기 action (Ajax용)
    extraReducers: {
        [TravelList.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [TravelList.fulfilled]: (state, { payload }) => {
            return {
                data: payload?.data?.data,
                loading: false,
                error: null
            }
        },
        [TravelList.rejected]: (state, { payload }) => {
            return {
                data: null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

// 리듀서 객체 내보내기 
export default TravleSlice.reducer;