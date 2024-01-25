import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => 'products',
    }),

    getProduct: builder.query({
      query: (search: string) => `products/search?q=${search}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
