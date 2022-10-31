import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  devptslist: [],
  message: null,
  landOwner: "",
};

export const fetchDevPtsInSpecificLand = createAsyncThunk(
  "devpts/fetchDevPtsInSpecificLand",
  async (input) => {
    const { landId, dateFrom, dateTo } = input;
    landId = parseFloat(landId);
    const response = await axios.get(
      `http://api-lok-live.leagueofkingdoms.com/api/stat/land/contribution?landId=${landId}&from=${dateFrom}&to=${dateTo}`
    );
    return response.data;
  }
);

export const devPtsSlice = createSlice({
  name: "devpts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchDevPtsInSpecificLand.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDevPtsInSpecificLand.fulfilled, (state, action) => {
        state.status = "fullfiled";
        if (action.payload.result === false) {
          state.status = "success";
          state.message = action.payload.err.code || action.payload.err.message;
          state.devptslist = [];
        } else {
          state.status = "success";
          state.devptslist = action.payload;
          state.message = null;
        }
      })
      .addCase(fetchDevPtsInSpecificLand.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message;
      });
  },
});

export const devPtsListResult = (state) => state.devpts.devptslist;
export const fetchDevPtsMsg = (state) => state.devpts.message;
export const status = (state) => state.devpts.status;

export default devPtsSlice.reducer;
