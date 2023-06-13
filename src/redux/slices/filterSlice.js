import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selections: {
    author: null,
    genre: null,
  },
  years: {
    newer: null,
  },
  authors: {
    author: null,
  },
  genres: {
    genre: null,
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
    getSelectionAuthorState: (state) => state.selections.author,
    setSelectionAuthorState: (state, action) => {
      return {
        ...state,
        selections: {
          author: action.payload,
          genre: state.selections.genre,
        },
      };
    },
    getGenreState: (state) => state.genres.genre,
    setGenreState: (state, action) => {
      return {
        ...state,
        genres: {
          genre: action.payload,
        },
      };
    },
    getSelectionGenreState: (state) => state.selections.genre,
    setSelectionGenreState: (state, action) => {
      return {
        ...state,
        selections: {
          author: state.selections.author,
          genre: action.payload,
        },
      };
    },
  },
});

export const {
  getYearsState,
  setYearsState,
  getSelectionAuthorState,
  setSelectionAuthorState,
  getAuthorState,
  setAuthorState,
  getGenreState,
  setGenreState,
  getSelectionGenreState,
  setSelectionGenreState,
} = filterSlice.actions;
export default filterSlice.reducer;
