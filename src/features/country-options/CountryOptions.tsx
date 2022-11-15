import "./CountryOptions.scss";
import { Country } from "../game/countries";
import { CountryOptionButton } from "../button/CountryOptionButton";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  incorrectAnswer,
  incrementScore,
  loseALife,
  nextLevel,
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
      dispatch(incrementScore());
      dispatch(nextLevel());
    } else {
      dispatch(loseALife());
      dispatch(incorrectAnswer(e.currentTarget.id));
    }
  };

  return (
    <div className="options">
      {possibleAnswers.map(
        ({ clicked, value: { code, name } }: RoundOption<Country>) => (
          <CountryOptionButton
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
