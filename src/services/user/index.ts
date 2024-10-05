import { api } from "..";

export type User = {
  id: number;
  name: string;
};

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({}),
  overrideExisting: false,
});
