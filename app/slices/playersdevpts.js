import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import convertToApiResult from "../../lib/convertToApiResult";
import filterBatchFetch from "../../lib/filterBatchFetch";
import { splitDatesIntoWeeks } from "../../lib/splitDatesIntoWeeks";

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

    let timeDiff = new Date(dateTo).getTime() - new Date(dateFrom).getTime();
    let daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff < 7) {
      const response = await axios.get(
        `https://api-lok-live.leagueofkingdoms.com/api/stat/land/contribution?landId=${landId}&from=${dateFrom}&to=${dateTo}`
      );
      return response.data;
    } else {
      let weeks = splitDatesIntoWeeks(dateFrom, dateTo);
      let apis = convertToApiResult(weeks, landId);

      console.log(apis);

      // dateApiList.forEach(async (everyLink) => {
      //   const response = await axios.get(everyLink);
      //   if (response.data.contribution != 0) {
      //     allResults.push(...response.data.contribution);
      //   }
      // });
      // filterBatchFetch(allResults);
      // return "No Data";
    }
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
