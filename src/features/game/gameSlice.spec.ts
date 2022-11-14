import gameReducer, {
  GameState,
  incrementScore,
  loseALife,
  nextLevel,
  resetGame,
  startGame,
} from "./gameSlice";
import { countries } from "./countries";

describe("game reducer", () => {
  const initialState: GameState = {
    currentRound: {
      answer: undefined,
      options: [],
      difficulty: { numOptions: 3, scoreForRightAnswer: 200 },
    },
    gameStatus: "stopped",
    countries,
    level: 0,
    lives: 3,
    score: 0,
  };

  it("should return the initial state", () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should decrement player life", () => {
    expect(gameReducer(initialState, loseALife())).toEqual({
      ...initialState,
      lives: 2,
    });
  });

  it("should set gameStatus to lost if 0 lives", () => {
    const prevState = {
      ...initialState,
      lives: 1,
    };

    expect(gameReducer(prevState, loseALife())).toEqual({
      ...initialState,
      lives: 0,
      gameStatus: "lost",
    });
  });

  it("should start the game", () => {
    expect(gameReducer(initialState, startGame())).toEqual({
      ...initialState,
      gameStatus: "started",
    });
  });

  it("should increment the score appropriately for the given level", () => {
    expect(gameReducer(initialState, incrementScore())).toEqual({
      ...initialState,
      score: initialState.currentRound.difficulty.scoreForRightAnswer,
    });
  });

  it("should set up the next level", () => {
    const { currentRound: nextRound, level: newLevel } = gameReducer(
      initialState,
      nextLevel()
    );

    expect(nextRound.answer).toBeDefined();
    expect(nextRound.options.length).not.toEqual(0);
    expect(nextRound.options.map(({ value }) => value)).toContain(
      nextRound.answer
    );
    expect(newLevel).toBeGreaterThan(initialState.level);
  });

  it("should reset the state", () => {
    let state: GameState = {
      ...initialState,
      currentRound: {
        answer: undefined,
        options: [],
        difficulty: { numOptions: 0, scoreForRightAnswer: 200 },
      },
      gameStatus: "lost",
      countries: countries.slice(1, 10),
      lives: 2,
      level: 15,
      score: 15000,
    };

    expect(gameReducer(state, resetGame())).toEqual(initialState);
  });
});
