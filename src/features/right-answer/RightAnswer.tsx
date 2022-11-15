import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextLevel } from "../game/gameSlice";
import "./RightAnswer.scss";
import { ModalDialog } from "../modal-dialog/ModalDialog";
import { Button } from "../button/Button";

type Props = {};
export const RightAnswer = (props: Props) => {
  const dispatch = useAppDispatch();

  const show = useAppSelector((state) => state.game.currentRound.passed);
  const playerScore = useAppSelector(({ game }) => game.score);

  const onClick = () => {
    dispatch(nextLevel());
  };

  return (
    <>
      {show && (
        <ModalDialog>
          <h2 className="title">Correct!</h2>
          <p>Score: {playerScore}</p>
          <Button text="Next Level" onClick={onClick} />
        </ModalDialog>
      )}
    </>
  );
};
