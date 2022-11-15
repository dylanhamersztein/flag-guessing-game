import gameReducer, {
  correctAnswer,
  GameState,
  incorrectAnswer,
  loseALife,
  nextLevel,
  resetGame,
  startGame,
} from "./gameSlice";
import { countries } from "./countries";

describe("game reducer", () => {
  const initialState: GameState = {
    currentRound: {
      passed: false,
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
        passed: false,
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

  it("should set an incorrect answer as clicked", () => {
    let currentState = gameReducer(initialState, startGame());
    currentState = gameReducer(currentState, nextLevel());

    expect(
      currentState.currentRound.options.filter(({ clicked }) => clicked).length
    ).toEqual(0);

    const anIncorrectAnswer = currentState.currentRound.options
      .map(({ value }) => value)
      .find(({ code }) => code !== currentState.currentRound.answer!!.code)!!;

    currentState = gameReducer(
      currentState,
      incorrectAnswer(anIncorrectAnswer.code)
    );

    const clickedOptions = currentState.currentRound.options.filter(
      ({ clicked }) => clicked
    );
    expect(clickedOptions.length).toEqual(1);
    expect(clickedOptions[0].value.code).toEqual(anIncorrectAnswer.code);
  });

  it("should increment score and mark round as passed", () => {
    let currentState = gameReducer(initialState, startGame());
    currentState = gameReducer(currentState, nextLevel());
    currentState = gameReducer(currentState, correctAnswer());

    expect(currentState.score).toBeGreaterThan(initialState.score);
    expect(currentState.currentRound.passed).toBeTruthy();
  });
});
