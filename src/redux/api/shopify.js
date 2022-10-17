import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shopifyApi = createApi({
 reducerPath: 'shopifyApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://graditest-store.myshopify.com/' }),
 endpoints: (builder) => ({
    fetchShopify: builder.query({
   query: () => ({
    url: `products/free-trainer-3-mmw.js`,
    method: 'GET',
   })
  }),
 })
});

export const { useFetchShopifyQuery } = shopifyApi;