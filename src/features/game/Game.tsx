import "./Game.scss";
import { GameInfo } from "../game-info/GameInfo";
import { Flag } from "../flag/Flag";
import { CountryOptions } from "../country-options/CountryOptions";
import { RightAnswer } from "../right-answer/RightAnswer";
import { Card } from "../card/Card";

type Props = {};
export const Game = (props: Props) => {
  return (
    <Card>
      <div className="game-body">
        <Flag />
        <CountryOptions />
        <GameInfo />
        <RightAnswer />
      </div>
    </Card>
  );
};
