import "./Game.scss";
import { GameInfo } from "../game-info/GameInfo";
import { Flag } from "../flag/Flag";
import { CountryOptions } from "../country-options/CountryOptions";

type Props = {};
export const Game = (props: Props) => {
  return (
    <div className="card game-body">
      <Flag />
      <CountryOptions />
      <GameInfo />
    </div>
  );
};
