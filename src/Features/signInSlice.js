import { createSlice } from '@reduxjs/toolkit'

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    followers: null,
    following: null,
    userPhoto: '',
    userName: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.userPhoto = action.payload.userPhoto;
      state.userName = action.payload.userName;
    },
    updateSignOutUser: state => {
      state.followers = null;
      state.following = null;
      state.userPhoto = '';
      state.userName = '';
    }
  }
});

export const { updateUser, updateSignOutUser } = signInSlice.actions;

export const selectFollowers = (state) => state.user.followers;
export const selectFollowing = (state) => state.user.following;
export const selectUserPhoto = (state) => state.user.userPhoto;
export const selectUserName = (state) => state.user.userName;

export default signInSlice.reducer;