import { createSlice } from "@reduxjs/toolkit";
import getNewArray from "./data/imagesGenerator";
const initialState = {
  answerList: getNewArray(),
  isCardOpen: false,
  tempId: null,
  tempCard: null,
  point: 0,
  wrongPair: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openCard(state, action) {
      const { id, index } = action.payload;
      const newCard = state.answerList[index];
      newCard.flipped = true;
      if (!state.isCardOpen) {
        state.tempId = index;
        state.tempCard = newCard;
        state.isCardOpen = true;
        return;
      }
      state.isCardOpen = false;
      if (state.tempCard.id === id) {
        state.point++;
        console.log("matched");
      } else {
        console.log("not match");
        console.log(state.tempId);
        state.wrongPair = [state.tempId, index];
        // setTimeout(() => {
        //   state.answerList[state.tempId].flipped = false;
        //   newCard.flipped = false;
        // }, 1000);
      }
    },
    closeCard(state, action) {
      state.answerList[action.payload[0]].flipped = false;
      state.answerList[action.payload[1]].flipped = false;
    },
  },
});

export const { openCard, closeCard } = userSlice.actions;
export default userSlice.reducer;
