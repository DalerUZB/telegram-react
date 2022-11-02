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
      if (
        action.payload === "Foydalanuvchi topilmadi!" ||
        action.payload === "Parol xato!" ||
        action.payload === "Parol xato!" ||
        localStorage.getItem("token") === undefined ||
        localStorage.getItem("username") === undefined
      ) {
        toast.error(action.payload);
      } else {
        state.auth = true;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("username", action.payload.username);
      }
    });

    builder.addCase(fetchSendMessageAction.fulfilled, (state, action) => {
      toast.success(action.payload.message);
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      if (
        action.payload === "Ushbu ism band!" ||
        action.payload === "Parol mos kelmadi!" ||
        action.payload ===
          "Parol yoki login kelmadi! Payloadni tekshiring! Iltimos!"
      ) {
        toast.error(action.payload);
      } else {
        toast.success(action.payload);
      }
    });
  },
});

export const { changingFunc, logOutStorage } = appSlice.actions;

export default appSlice.reducer;
