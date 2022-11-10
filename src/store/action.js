import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchDataMessages = createAsyncThunk("messages/fetch", async () =>
  await api.fetchMessage()
);

export const login = createAsyncThunk(
  "login/fetch",
  async (data) => await api.fetchLogin(data)
);

export const fetchSendMessageAction = createAsyncThunk(
  "sendMessage/fetch",
  async (body) => await api.fetchSendMessage(body)
);

export const fetchSignup = createAsyncThunk(
  "createAccount/fetch",
  async (body) => await api.fetchSignup(body)
);
export const fetchDelete = createAsyncThunk(
  "deleteMessage/fetch",
  async (id) => await api.deleteMessage(id)
)
