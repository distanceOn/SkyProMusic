import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  id: 0,
  token: "",
  userName: "",
  email: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => state,
    setUser: (state, action) => {
      return {
        ...state,
        login: true,
        id: action.payload.id,
        token: action.payload.token,
        userName: action.payload.username,
        email: action.payload.email,
      };
    },
  },
});

export const { getUser, setUser } = authSlice.actions;
export default authSlice.reducer;
