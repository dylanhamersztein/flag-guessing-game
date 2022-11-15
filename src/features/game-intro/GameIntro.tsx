import { nextLevel, startGame } from "../game/gameSlice";
import { useAppDispatch } from "../../app/hooks";
import "./GameIntro.scss";
import { Card } from "../card/Card";
import { Button } from "../button/Button";

type Props = {};
export const GameIntro = (props: Props) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(nextLevel());
    dispatch(startGame());
  };

  return (
    <Card>
      <div className="intro-body">
        <h1>Guess the Flag!</h1>
        <h2>Think you can guess the flag from a few options? </h2>
        <h3>Give it a go.</h3>
        <Button onClick={onClick} text="Start Game" />
      </div>
    </Card>
  );
};
