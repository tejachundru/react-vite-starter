import { api } from "..";
import type { User } from "./types";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<Array<User>, void>({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetUserQuery } = userApi;
