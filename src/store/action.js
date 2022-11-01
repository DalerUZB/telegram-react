import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchDataMessages = createAsyncThunk(
  "messages/fetch"
  , async () => api.fetchMessage());

export const login = createAsyncThunk(
  "login/fetch",
  async (data) => await api.fetchLogin(data)
);
