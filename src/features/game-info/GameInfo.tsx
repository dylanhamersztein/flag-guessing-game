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
      <p>Level: {level}</p>
      <p>Score: {playerScore}</p>
      <div className="lives">
        <p>Lives: </p>
        <HeartRow numHearts={playerLives} />
      </div>
    </div>
  );
};
