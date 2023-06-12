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
    token: builder.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
      }),
    }),
    tracks: builder.query({
      query: () => ({
        url: "catalog/track/all/",
        method: "GET",
      }),
    }),
    oneTrack: builder.query({
      query: (id) => ({
        url: `catalog/track/${id}/`,
        method: "GET",
      }),
    }),
    refreshToken: builder.mutation({
      query: (body) => ({
        url: "user/token/refresh/",
        method: "POST",
        body,
      }),
    }),
    playlists: builder.query({
      query: (id) => ({
        url: `catalog/selection/${id}/`,
        method: "GET",
      }),
    }),
    favoriteTracks: builder.query({
      query: () => ({
        url: "catalog/track/favorite/all/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
    }),
    addToFavorite: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
    }),
    removeFromFavorite: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useTokenMutation,
  useTracksQuery,
  useOneTrackQuery,
  useRefreshTokenMutation,
  usePlaylistsQuery,
  useFavoriteTracksQuery,
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
} = api;
