
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  fetchDataMessages,
  fetchSendMessageAction,
  fetchSignup,
  login,
} from "./action";

const state = {
  showChat: false,
  messages: [],
  auth: Boolean(localStorage.getItem("token")),
};

export const appSlice = createSlice({
  name: "app",
  initialState: state,
  reducers: {
    changingFunc: (state) => {
      state.showChat = true;
    },
    logOutStorage: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataMessages.fulfilled, (state, action) => {

      state.messages = action.payload;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload.token) {
        toast.error(action.payload)
      } else {
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('username', action.payload.username)
        state.auth = true
      }
    });

    builder.addCase(fetchSendMessageAction.fulfilled, (state, action) => {
      toast.success(action.payload.message);
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => { });
  },
});

export const { changingFunc, logOutStorage } = appSlice.actions;

export default appSlice.reducer;
