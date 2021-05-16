import { createSlice } from '@reduxjs/toolkit'

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    followers: null,
    following: null,
    userPhoto: '',
    userName: '',
    userBio: '',
    posts: [],
  },
  reducers: {
    updateUser: (state, action) => {
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.userPhoto = action.payload.userPhoto;
      state.userName = action.payload.userName;
      state.userBio = action.payload.userBio;
      state.posts = action.payload.posts;
    },
    updateSignOutUser: state => {
      state.followers = 0;
      state.following = 0;
      state.userPhoto = '';
      state.userName = '';
      state.userBio = '';
      state.posts = [];
    }
  }
});

export const { updateUser, updateSignOutUser } = signInSlice.actions;

export const selectFollowers = (state) => state.user.followers;
export const selectFollowing = (state) => state.user.following;
export const selectUserPhoto = (state) => state.user.userPhoto;
export const selectUserName = (state) => state.user.userName;
export const selectUserBio = (state) => state.user.userBio;
export const selectUserPosts = (state) => state.user.posts;

export default signInSlice.reducer;