import "./FlagGuessingGame.scss";
import { useAppSelector } from "./app/hooks";
import { GameIntro } from "./features/game-intro/GameIntro";
import { Game } from "./features/game/Game";
import { GameOver } from "./features/game-over/GameOver";

const FlagGuessingGame = () => {
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
