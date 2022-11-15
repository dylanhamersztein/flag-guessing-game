import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CountryOptionButton } from "../button/CountryOptionButton";
import { resetGame } from "../game/gameSlice";
import "./GameLost.scss";

type Props = {};
export const GameLost = (props: Props) => {
  const dispatch = useAppDispatch();
  const playerScore = useAppSelector((state) => state.game.score);

  return (
    <div className="modal">
      <div className="modal-body">
        <h1>You've lost!</h1>
        <h3>Your score was {playerScore}</h3>
        <CountryOptionButton
          text="Start Again"
          onClick={() => dispatch(resetGame())}
        />
      </div>
    </div>
  );
};
