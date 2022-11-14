import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";
import roundReducer from "../features/round/roundSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    round: roundReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
