import gameReducer, {
  gainLife,
  GameState,
  loseLife,
  resetGame,
} from "./gameSlice";
import { countries } from "./countries";

describe("game reducer", () => {
  const initialState: GameState = {
    countries,
    level: 1,
    lives: 3,
    score: 0,
  };

  it("should return the initial state", () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should not increment player life when already at maximum", () => {
    expect(gameReducer(initialState, gainLife())).toEqual(initialState);
  });

  it("should increment player life when below maximum", () => {
    let state: GameState = {
      ...initialState,
      lives: 2,
    };

    expect(gameReducer(state, gainLife())).toEqual(initialState);
  });

  it("should decrement player life", () => {
    expect(gameReducer(initialState, loseLife())).toEqual({
      ...initialState,
      lives: 2,
    });
  });

  it("should reset the state", () => {
    let state: GameState = {
      countries: countries.slice(1, 10),
      lives: 2,
      level: 15,
      score: 15000,
    };

    expect(gameReducer(state, resetGame())).toEqual(initialState);
  });
});
