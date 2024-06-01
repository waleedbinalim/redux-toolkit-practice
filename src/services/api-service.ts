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

      getItemById: builder.query<
        { item: ItemType },
        ItemType["id"] | undefined
      >({
        query: (id) => ({ url: `/items/${id}` }),
        keepUnusedDataFor: 500,
      }),
    };
  },
});

export const {
  useGetItemsQuery,
  useGetItemByIdQuery,
  useLazyGetItemByIdQuery, // ALLOWS MANUALLY FETCHING INSTEAD OF FETCHING QUERY IMMEDIATELY
  //
} = itemApi; //PREMADE STUFF RTK Query OFFERS
// CONTAINS Uninitialized | Error | Success | Fetching

//  TO USE IN APP
//  const {data, currentData, isLoading} = useGetItemsQuery()
//  const items = useMemo(() => data?.items || [], [data])

// Subscriptions and Sockets are integrated in RTK Query too! 🤯🤯
