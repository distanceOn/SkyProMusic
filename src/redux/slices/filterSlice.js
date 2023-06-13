import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  years: {
    newer: null,
  },
  authors: {
    author: null,
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
    getAuthorState: (state) => state.authors.author,
    setAuthorState: (state, action) => {
      return {
        ...state,
        authors: {
          author: action.payload,
        },
      };
    },
  },
});

export const { getYearsState, setYearsState, getAuthorState, setAuthorState } =
  filterSlice.actions;
export default filterSlice.reducer;
