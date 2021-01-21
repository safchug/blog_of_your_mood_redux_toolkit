import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../services/api";

export const registerUser = createAsyncThunk('user/registerUser', async (data)=> {
    console.log('I was here', data);
   const request = await api.makeRequest({url: '/registration', method: 'POST', data: data})

    return request.message;
});

export const loginUser = createAsyncThunk('user/loginUser', async (data)=> {
    console.log('I was here', data);
    const request = await api.makeRequest({url: '/login', method: 'POST', data: data})

    return request.data;
});

export const auth = createAsyncThunk('user/auth', async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token doesnt exist');

    const request = await api.makeRequest({url: '/auth', method: 'POST', token});

    return request.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: '',
        loginStatus: 'unauthenticated',
        loginError: ''
    },

    reducers:{
        logout: state => {
            state.user = null;
            state.loginStatus = 'unauthenticated';
            localStorage.removeItem('token');
        }
    },

    extraReducers: {
        [registerUser.pending]: state => {
            state.status = 'pending';
        },

        [registerUser.fulfilled]: state => {
            state.status = 'success';
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'error';
            if(action.error.message.includes('400')) {
                state.error = 'Enter required data';
            } else if (action.error.message.includes('409')) {
                console.dir(action);
                state.error = action.error.message;
            } else {
                state.error = 'Something went wrong';
            }
        },

        [loginUser.pending]: state => {
            state.loginStatus = 'processing';
        },

        [loginUser.fulfilled]: (state, action) => {
            state.loginStatus = 'authenticated';
            localStorage.setItem('token', action.payload.token);
            state.user = action.payload.userInfo;
        },

        [loginUser.rejected]: (state, action) => {
            state.loginStatus = 'error';
            if(action.error.message.includes('404')) {
                state.loginError = 'This user doesn`t exist';
            } else {
                state.loginError = 'Something went wrong';
            }
        },

        [auth.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [auth.rejected]: state => {
            state.user = null;
            localStorage.removeItem('token');
        }
    }
});

export const {logout} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;