import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type IAppStateSlice = {
  theme: "light" | "dark";
  sidebarOpen: boolean;
};

const initialState: IAppStateSlice = {
  theme: "light",
  sidebarOpen: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<IAppStateSlice["theme"]>) => {
      state.theme = action.payload;
    },
    setSidebarOpen: (
      state,
      action: PayloadAction<IAppStateSlice["sidebarOpen"]>
    ) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
