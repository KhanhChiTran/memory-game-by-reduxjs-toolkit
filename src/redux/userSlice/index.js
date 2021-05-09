import { createSlice } from "@reduxjs/toolkit";
import getNewArray from "./data/imagesGenerator";
const initialState = {
  answerList: getNewArray(),
  isCardOpen: false,
  tempId: null,
  tempCard: null,
  point: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openCard(state, action) {
      state.answerList[action.payload].flipped = true;
    },
  },
});

export const { openCard } = userSlice.actions;
export default userSlice.reducer;
