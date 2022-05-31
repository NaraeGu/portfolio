import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://data.visitkorea.or.kr/openapi/service/rest/Durunubi/routeList';
const API_KEY = 'd6em57V4D14Uzwlj7SNyzg1twb34RLHldBm7l4aFfYVxOlHoSCpIenfn9QTtNpyRDBLj0mwPLsAJFClngpQ5Ew%3D%3D';
// const API_KEY = 'd6em57V4D14Uzwlj7SNyzg1twb34RLHldBm7l4aFfYVxOlHoSCpIenfn9QTtNpyRDBLj0mwPLsAJFClngpQ5Ew==';
// const API_KEY ='25xx4Ka1f5ykn751v+LECo4HRPFEs02Gnpw9tMtmgyBL7RQQFjdF/yDAir2XKz/0Qbq43z30RvBpLtTMh887BQ==';

export const getLoadTourList = createAsyncThunk('LoadTourSlice/getLoadTourList', async(payload,{rejectWitValue})=>{
    let result = null;
    try {
        result = await axios.get(API_URL,{
            params:{
                ServiceKey: API_KEY,
                pageNo:payload.page? payload.page:1,
                MobileOs:'ETC',
                MobileApp: 'AppTest'
            }
        })
        // console.log(result);
    } catch (error) {
        result = rejectWitValue(error.response);
    }
    return result;
});

const LoadTourSlice = createSlice({
    name: 'loadTour',
    initialState:{
        data: null,   
        loading: null,
        error: null
    },
    reducers:{

    },
    extraReducers:{
        [getLoadTourList.pending]: (state, {payload})=>{
            return { ...state, loading:true}
        },
        [getLoadTourList.fulfilled]: (state, {payload})=>{
            return {
                data: payload?.data?.response?.body,
                loading: false,
                error: null
            }
        },
        [getLoadTourList.rejected]:(state, {payload})=>{
            return {
                data:null,
                loading: false,
                error: {
                    code: payload?.status ? payload.status: 500,
                    message: payload?.statusText? payload.statusText: 'Server Error'
                }
            }
        }
    }
})
export default LoadTourSlice.reducer;