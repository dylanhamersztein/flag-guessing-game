import * as React from "react";
import "./Game.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Country } from "./countries";
import { incrementScore, loseALife, nextLevel } from "./gameSlice";
import { Button } from "../button/Button";
import { GameInfo } from "../game-info/GameInfo";

type Props = {};
export const Game = (props: Props) => {
  const dispatch = useAppDispatch();

  const flagCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code
  );
  const possibleAnswers = useAppSelector(
    (state) => state.game.currentRound.options
  );

  const onClick = (e: any) => {
    if (e.currentTarget.id === flagCode!!) {
      dispatch(incrementScore());
      dispatch(nextLevel());
    } else {
      dispatch(loseALife());
    }
  };

  return (
    <>
      <GameInfo />
      <img
        className="question-flag"
        src={"https://countryflagsapi.com/png/" + flagCode}
        alt="Which flag is this?"
      />
      <div className="options">
        {possibleAnswers.map(({ code, name }: Country) => (
          <Button id={code} key={code} text={name} onClick={onClick} />
        ))}
      </div>
    </>
  );
};
