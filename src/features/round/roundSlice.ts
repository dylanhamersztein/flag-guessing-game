import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../game/countries";

export interface RoundState {
  answer?: Country;
  options: Country[];
}

const initialState: RoundState = {
  answer: undefined,
  options: [],
};

export const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setupRound: (state, { payload }: PayloadAction<Country[]>) => {
      const answer = payload[Math.floor(Math.random() * payload.length)];

      state.answer = answer;
      state.options = payload.filter((it) => it.code !== answer.code);
    },
    resetRound: () => initialState,
  },
});

export const { setupRound, resetRound } = roundSlice.actions;

export default roundSlice.reducer;
