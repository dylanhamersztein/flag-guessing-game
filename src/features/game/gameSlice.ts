import { createSlice } from "@reduxjs/toolkit";
import { countries, Country } from "./countries";

export interface Difficulty {
  numOptions: number;
  scoreForRightAnswer: number;
}

interface LevelToDifficulty {
  [key: number]: Difficulty;
}

const levelToDifficulty: LevelToDifficulty = {
  1: {
    numOptions: 3,
    scoreForRightAnswer: 200,
  },
  5: {
    numOptions: 5,
    scoreForRightAnswer: 400,
  },
  10: {
    numOptions: 7,
    scoreForRightAnswer: 600,
  },
};

export interface RoundState {
  answer?: Country;
  options: Country[];
  difficulty: Difficulty;
}

export interface GameState {
  gameStatus: "stopped" | "started" | "lost";
  lives: number;
  score: number;
  level: number;
  countries: Country[];
  currentRound: RoundState;
}

const initialState: GameState = {
  gameStatus: "stopped",
  lives: 3,
  score: 0,
  level: 0,
  countries,
  currentRound: {
    answer: undefined,
    options: [],
    difficulty: levelToDifficulty[1],
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    loseALife: (state) => {
      state.lives -= 1;

      if (state.lives === 0) {
        state.gameStatus = "lost";
      }
    },
    startGame: (state) => {
      state.gameStatus = "started";
    },
    incrementScore: (state) => {
      state.score += state.currentRound.difficulty.scoreForRightAnswer;
    },
    nextLevel: (state) => {
      state.level += 1;

      state.currentRound.difficulty =
        levelToDifficulty[state.level] || state.currentRound.difficulty;

      const numOptions = state.currentRound.difficulty.numOptions;
      state.currentRound.options = [];
      for (let i = 0; i < numOptions; i++) {
        let option =
          state.countries[Math.floor(Math.random() * state.countries.length)];

        while (state.currentRound.options.includes(option)) {
          option =
            state.countries[Math.floor(Math.random() * state.countries.length)];
        }

        state.currentRound.options.push(option);
      }

      state.currentRound.answer =
        state.currentRound.options[
          Math.floor(Math.random() * state.currentRound.options.length)
        ];
    },
    resetGame: (state) => initialState,
  },
});

export const { startGame, resetGame, loseALife, incrementScore, nextLevel } =
  gameSlice.actions;

export default gameSlice.reducer;
