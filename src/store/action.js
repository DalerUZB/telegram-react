import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchDataMessages = createAsyncThunk(
  "messages/fetch",
  async (data) => {
    api.fetchData(data);
  }
);

export const login = createAsyncThunk("login/fetch", async (data) => {
  api.fetchData(data);
});
