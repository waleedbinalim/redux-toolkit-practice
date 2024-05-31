import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {};

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getItems: builder.query<{ items: Item[] }, void>({
        query: () => "items",
      }),
    };
  },
});
