import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const UserConfig = createSlice({
  name: "UserConfig",
  initialState: {
    name: "abhijeet",
  },
  reducers: {
    setUser: (state) => {
      state.name = "moon";
    },
  },
});

// export the action
export const { setUser } = UserConfig.actions;

export default UserConfig.reducer;
