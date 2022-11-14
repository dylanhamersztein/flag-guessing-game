import { createSlice } from "@reduxjs/toolkit";
import { countries, Country } from "./countries";

export interface GameState {
  lives: number;
  score: number;
  level: number;
  countries: Country[];
}

const initialState: GameState = {
  lives: 3,
  score: 0,
  level: 1,
  countries,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    loseLife: (state) => {
      state.lives -= 1;
    },
    gainLife: (state) => {
      if (state.lives < 3) {
        state.lives += 1;
      }
    },
    resetGame: (state) => initialState,
  },
});

export const { loseLife, gainLife, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
