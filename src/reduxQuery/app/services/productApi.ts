import { createApi, CreateApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { build } from 'vite';

export const productApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),
    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: ``,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: ``,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: updatedProduct,
      }),
    }),
    deleteById: builder.mutation({
      query: (id) => ({
        url: ``,
        method: 'DELETE',
      }),
    }),
  }),
});
