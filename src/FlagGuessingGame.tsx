import "./FlagGuessingGame.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { GameIntro } from "./features/game-intro/GameIntro";
import { Game } from "./features/game/Game";
import { GameOver } from "./features/game-over/GameOver";
import { fetchAllFlagCodes } from "./features/game/gameSlice";

const FlagGuessingGame = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchAllFlagCodes());

  const gameStatus = useAppSelector((state) => state.game.gameStatus);

  return (
    <>
      <div className="game-container">
        {gameStatus === "stopped" ? <GameIntro /> : <Game />}
      </div>
      {gameStatus === "lost" && <GameOver />}
    </>
  );
};

export default FlagGuessingGame;
