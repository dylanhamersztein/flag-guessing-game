import * as React from "react";
import { nextLevel, startGame } from "../game/gameSlice";
import { useAppDispatch } from "../../app/hooks";
import "./GameIntro.scss";
import { Button } from "../button/Button";

type Props = {};
export const GameIntro = (props: Props) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(nextLevel());
    dispatch(startGame());
  };

  return (
    <div className="game-intro">
      <h2>Think you can guess the flag from a few options? Give it a go.</h2>
      <Button text="Start Game" onClick={onClick} />
    </div>
  );
};
