import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextLevel } from "../game/gameSlice";
import "./RightAnswer.scss";

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
        <div className="modal">
          <div className="modal-body">
            <div className="content">
              <h2 className="title">Correct!</h2>
              <p>Score: {playerScore}</p>
              <button className="button" onClick={onClick}>
                Next Level
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
