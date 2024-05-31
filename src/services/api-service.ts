import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ItemType = {
  id: string;
  name: string;
  packed: boolean;
};

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => {
    return {
      getItems: builder.query<{ items: ItemType[] }, void>({
        query: () => ({ url: "/items" }),
      }),
    };
  },
});

export const { useGetItemsQuery } = itemApi; //PREMADE STUFF RTK Query OFFERS IS
// CONTAINS Uninitialized | Error | Success | Fetching

//  TO USE IN APP
//  const {data, currentData, isLoading} = useGetItemsQuery()
//  const items = useMemo(() => data?.items || [], [data])

// Subscriptions and Sockets are integrated in RTK Query too! 🤯🤯
