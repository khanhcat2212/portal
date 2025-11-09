import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebartState {
  isOpenSideBar: boolean;
}

const initialState: SidebartState = {
  isOpenSideBar: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsOpenSideBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSideBar = action.payload;
    },
    toggleSideBar: (state) => {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
  },
});

export const { setIsOpenSideBar, toggleSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
