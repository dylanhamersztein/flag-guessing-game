import "./FlagGuessingGame.scss";
import { useAppSelector } from "./app/hooks";
import { GameIntro } from "./features/game-intro/GameIntro";
import { Game } from "./features/game/Game";
import { GameLost } from "./features/game-lost/GameLost";
import * as React from "react";

const FlagGuessingGame = () => {
  const gameStatus = useAppSelector((state) => state.game.gameStatus);

  return (
    <>
      <div className="game-container">
        {gameStatus === "stopped" ? <GameIntro /> : <Game />}
      </div>
      {gameStatus === "lost" && <GameLost />}
    </>
  );
};

export default FlagGuessingGame;
