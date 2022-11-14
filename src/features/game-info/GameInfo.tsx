import "./GameInfo.scss";
import { useAppSelector } from "../../app/hooks";
import { HeartRow } from "../heart-row/HeartRow";

type Props = {};
export const GameInfo = (props: Props) => {
  const level = useAppSelector((state) => state.game.level);
  const playerScore = useAppSelector((state) => state.game.score);
  const playerLives = useAppSelector((state) => state.game.lives);

  return (
    <div className="score-row">
      <h2>Level: {level}</h2>
      <h2>Score: {playerScore}</h2>
      <HeartRow numHearts={playerLives} />
    </div>
  );
};
