import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // TODO: add auth token
    if (process.env.NODE_ENV === "development") {
      console.log("headers", headers, getState());
    }
    // const token = localStorage.getItem("token"); or
    // const token = (getState() as RootState).auth.token;
    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

/**
 * The base query function with interceptors.
 *
 * This function is used to create the base query function with interceptors.
 * It handles the 401 status code and refreshes the token if necessary.
 *
 * @param args - The arguments for the base query function.
 * @param api - The API instance.
 * @param extraOptions - The extra options for the base query function.
 *
 * @returns The result of the base query function.
 */
const baseQueryWithInterceptors: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // TODO: handle refresh token
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptors,
  endpoints: () => ({}),
});
