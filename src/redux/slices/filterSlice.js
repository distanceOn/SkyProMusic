import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  years: {
    newer: null,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getYearsState: (state) => state.years.newer,
    setYearsState: (state, action) => {
      return {
        ...state,
        years: {
          newer: action.payload,
        },
      };
    },
  },
});

export const { getYearsState, setYearsState } = filterSlice.actions;
export default filterSlice.reducer;
