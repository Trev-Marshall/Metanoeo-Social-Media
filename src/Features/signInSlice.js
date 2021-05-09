import { createSlice } from '@reduxjs/toolkit'

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    followers: null,
    following: null,
    userPhoto: null
  },
  reducers: {
    updateUser: state => {
      state.followers = action.payload.followers,
        state.following = action.payload.following,
        state.userPhoto = action.payload.userPhoto
    },
    updateSignOutUser: state => {
      state.followers = null,
        state.following = null,
        state.userPhoto = null
    }
  }
});

export const { updateUser, updateSignOutUser } = signInSlice.actions;

export const selectFollowers = (state) => state.name.followers;
export const selectFollowing = (state) => state.name.following;
export const selectUserPhoto = (state) => state.name.userPhoto;

export default signInSlice.reducer;