import "./CountryOptions.scss";
import { Button } from "../button/Button";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  correctAnswer,
  Country,
  incorrectAnswer,
  loseALife,
  RoundOption,
} from "../game/gameSlice";

type Props = {};
export const CountryOptions = (props: Props) => {
  const dispatch = useAppDispatch();

  const countryCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code!!
  );

  const possibleAnswers = useAppSelector(
    (state) => state.game.currentRound.options
  );

  const onClick = (e: any) => {
    if (e.currentTarget.id === countryCode) {
      dispatch(correctAnswer());
    } else {
      dispatch(loseALife());
      dispatch(incorrectAnswer(e.currentTarget.id));
    }
  };

  return (
    <div className="options">
      {possibleAnswers.map(
        ({ clicked, value: { code, name } }: RoundOption<Country>) => (
          <Button
            id={code}
            key={code}
            text={name}
            clicked={clicked}
            onClick={onClick}
          />
        )
      )}
    </div>
  );
};
