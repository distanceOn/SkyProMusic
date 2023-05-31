import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "user/signup/",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "user/login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = api;
