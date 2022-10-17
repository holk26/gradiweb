import { configureStore } from '@reduxjs/toolkit';

import { shopifyApi } from "../redux/api/shopify";


export const store = configureStore({
  reducer: {
    [shopifyApi.reducerPath]: shopifyApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopifyApi.middleware),
});