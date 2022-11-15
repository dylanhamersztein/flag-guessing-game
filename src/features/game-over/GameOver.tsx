import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button } from "../button/Button";
import { resetGame } from "../game/gameSlice";
import "./GameOver.scss";
import { ModalDialog } from "../modal-dialog/ModalDialog";

type Props = {};
export const GameOver = (props: Props) => {
  const dispatch = useAppDispatch();

  const correctAnswer = useAppSelector(
    (state) => state.game.currentRound.answer!!.name
  );
  const playerScore = useAppSelector((state) => state.game.score);

  return (
    <ModalDialog>
      <h1>You've lost!</h1>
      <h2>The correct answer was {correctAnswer}</h2>
      <h3>Your score was {playerScore}</h3>
      <Button text="Start Again" onClick={() => dispatch(resetGame())} />
    </ModalDialog>
  );
};
