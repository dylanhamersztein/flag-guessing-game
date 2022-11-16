import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlagApi } from "../../app/flagApi";

export type Country = {
  code: string;
  name: string;
};

export interface RoundOption<T> {
  value: T;
  clicked: boolean;
}

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
  options: RoundOption<Country>[];
  difficulty: Difficulty;
  passed: boolean;
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
  countries: [],
  currentRound: {
    answer: undefined,
    options: [],
    difficulty: levelToDifficulty[1],
    passed: false,
  },
};

export const fetchAllFlagCodes = createAsyncThunk(
  "game/fetchFlagCodes",
  async () => {
    const countryCodeToCountryName = await FlagApi.getAllFlagCodes();

    return Object.keys(countryCodeToCountryName)
      .filter((countryCode) => countryCode.length === 2)
      .map((code) => ({
        code,
        name: countryCodeToCountryName[code],
      }));
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameStatus = "started";
    },
    loseALife: (state) => {
      state.lives -= 1;

      if (state.lives === 0) {
        state.gameStatus = "lost";
      }
    },
    nextLevel: (state) => {
      state.level += 1;
      state.currentRound.passed = false;

      state.currentRound.difficulty =
        levelToDifficulty[state.level] || state.currentRound.difficulty;

      const numOptions = state.currentRound.difficulty.numOptions;
      state.currentRound.options = [];
      for (let i = 0; i < numOptions; i++) {
        let value =
          state.countries[Math.floor(Math.random() * state.countries.length)];

        while (
          state.currentRound.options
            .map(({ value }) => value as Country)
            .includes(value)
        ) {
          value =
            state.countries[Math.floor(Math.random() * state.countries.length)];
        }

        state.currentRound.options.push({ value, clicked: false });
      }

      state.currentRound.answer =
        state.currentRound.options[
          Math.floor(Math.random() * state.currentRound.options.length)
        ].value;
    },
    incorrectAnswer: (state, { payload }: PayloadAction<string>) => {
      const clickedOption = state.currentRound.options.find(
        (it: RoundOption<Country>) => it.value.code === payload
      );

      clickedOption!!.clicked = true;
    },
    correctAnswer: (state) => {
      state.score += state.currentRound.difficulty.scoreForRightAnswer;
      state.currentRound.passed = true;
    },
    resetGame: (state) => initialState,
  },
  extraReducers: (builder) =>
    builder.addCase(
      fetchAllFlagCodes.fulfilled,
      (state, { payload }: PayloadAction<Country[]>) => {
        state.countries = payload;
      }
    ),
});

export const {
  startGame,
  resetGame,
  loseALife,
  nextLevel,
  incorrectAnswer,
  correctAnswer,
} = gameSlice.actions;

export default gameSlice.reducer;
