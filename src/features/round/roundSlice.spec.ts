import gameReducer, { resetRound, RoundState, setupRound } from "./roundSlice";

describe("round reducer", () => {
  const initialState: RoundState = {
    answer: undefined,
    options: [],
  };

  it("should return the initial state", () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should set up round", () => {
    const countriesForRound = [
      { name: "AMERICAN SAMOA", code: "AS" },
      { name: "ANDORRA", code: "AD" },
      { name: "ANGOLA", code: "AO" },
      { name: "ANGUILLA", code: "AI" },
    ];

    const newState = gameReducer(initialState, setupRound(countriesForRound));
    expect(newState.answer).toBeDefined();
    expect(newState.options.length).toBeGreaterThan(0);
    expect(newState.options.includes(newState.answer!!)).toBeFalsy();
  });

  it("should reset the state", () => {
    const state: RoundState = {
      answer: { name: "AZERBAIJAN", code: "AZ" },
      options: [
        { name: "ARUBA", code: "AW" },
        { name: "AUSTRALIA", code: "AU" },
        { name: "AUSTRIA", code: "AT" },
        { name: "AZERBAIJAN", code: "AZ" },
      ],
    };

    expect(gameReducer(state, resetRound())).toEqual(initialState);
  });
});
