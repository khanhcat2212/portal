import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavState {
  activePath: string;
}

const initialState: NavState = {
  activePath: "/admin",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.activePath = action.payload;
    },
  },
});

export const { setActiveNav } = navSlice.actions;
export default navSlice.reducer;
