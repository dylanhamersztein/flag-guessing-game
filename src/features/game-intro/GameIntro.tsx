import { nextLevel, startGame } from "../game/gameSlice";
import { useAppDispatch } from "../../app/hooks";
import "./GameIntro.scss";

type Props = {};
export const GameIntro = (props: Props) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(nextLevel());
    dispatch(startGame());
  };

  return (
    <div className="card intro-body">
      <h1>Guess the Flag!</h1>
      <h2>Think you can guess the flag from a few options? Give it a go.</h2>
      <button onClick={onClick} className="button">
        Start Game
      </button>
    </div>
  );
};
