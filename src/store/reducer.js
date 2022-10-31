import { createSlice } from "@reduxjs/toolkit";
import { fetchDataMessages, login } from "./action";

const state = {
  showChat: false,
  messages: [],
  //   token: Boolean(localStorage.getItem('token'))
};

export const appSlice = createSlice({
  name: "app",
  initialState: state,
  reducers: {
    changingFunc: (state) => {
      state.showChat = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataMessages.fulfilled, (state, action) => {});

    builder.addCase(login.fulfilled, (state, action) => {
      // localStorage.setItem("token", action.payload.token);
      // localStorage.setItem("username", action.payload.username);
      console.log(action);
    });
  },
});

export const { changingFunc } = appSlice.actions;

export default appSlice.reducer;
