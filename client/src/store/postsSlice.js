import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../services/api";
import {selectUser} from "./userSlice";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page = 1) => {
    const response = await api.makeRequest({url: `/posts/${page}`});
    return response.data;
})

export const addPost = createAsyncThunk('posts/addPost', async (data, {dispatch, getState}) => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error('You need to login');

    const response = await api.makeRequest({url: '/addPost', method:'POST', token, data});

    const {id: userId, login} = selectUser(getState());
    dispatch(add({...data, userId, login, id: response.data.id}));

    return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async ({id, page}, {dispatch}) => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error('You need to login');

    const response = await api.makeRequest({url: `/delete/${id}`, method:'DELETE', token});

    dispatch(fetchPosts(page));

    return response.data;
});

export const editPost = createAsyncThunk('post/editPost', async ({id, post}, {dispatch}) => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error('You need to login');

    const response = await api.makeRequest({url: `/edit/${id}`, method:'PUT', token, data: post});

    dispatch(edited({...post, id}));

    return response.data;
});

export const addComment = createAsyncThunk('post/addComment', async ({id, comment}, {dispatch})=> {
    const token = localStorage.getItem('token');
    if(!token) throw new Error('You need to login');

    const response = await api.makeRequest({url: `/addCommetn/${id}`, method:'POST', token, data: comment});
    dispatch(commented({comment, id}));
    return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
        status: 'idle',
        error: null,
        addingStatus: 'idle',
        addingError: ''
    },
    reducers:{
        add: (state, action) => {
            state.postsList = [action.payload, ...state.postsList];
        },

        edited: (state, action) => {
            let post = state.postsList.find(post => post.id === action.payload.id);
            console.log('action', action)
            post['title'] = action.payload.title;
            post['text'] = action.payload.text;
        },
        commented: (state, action) => {
            let post = state.postsList.find(post => post.id === action.payload.id);
            console.log('action', action)
            post.comments.push(action.payload.comment);
        }
    }
    ,
    extraReducers: {
        [fetchPosts.pending]: state => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.postsList = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },

        [addPost.pending]: state => {
            state.addingStatus = 'processing';
        },
        [addPost.fulfilled]: state => {
            state.addingStatus = 'added';
        },
        [addPost.rejected]: (state, action) => {
            state.addingStatus = 'error';
            state.addingError = action.error.message;
        },

        [deletePost.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message;
        },

        [editPost.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message;
        },

        [addComment.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message;
        },
    }
});

export const {add, edited, commented} = postsSlice.actions;

export default postsSlice.reducer;