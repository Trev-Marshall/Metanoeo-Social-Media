import { createSlice } from '@reduxjs/toolkit'

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    userPhoto: '',
    userName: '',
    userBio: '',
    posts: [],
  },
  reducers: {
    updateUser: (state, action) => {
      state.userPhoto = action.payload.userPhoto;
      state.userName = action.payload.userName;
      state.userBio = action.payload.userBio;
      state.posts = action.payload.posts;
    },
    updateSignOutUser: state => {
      state.userPhoto = '';
      state.userName = '';
      state.userBio = '';
      state.posts = [];
    }
  }
});

export const { updateUser, updateSignOutUser } = signInSlice.actions;

export const selectUserPhoto = (state) => state.user.userPhoto;
export const selectUserName = (state) => state.user.userName;
export const selectUserBio = (state) => state.user.userBio;
export const selectUserPosts = (state) => state.user.posts;

export default signInSlice.reducer;