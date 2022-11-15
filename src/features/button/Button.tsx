import "./Button.scss";
import { useAppSelector } from "../../app/hooks";

type Props = {
  id?: any;
  text: string;
  onClick: (e: any) => void;
  clicked?: boolean;
};

export const Button = ({ id, text, onClick, clicked = false }: Props) => {
  const answerCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code
  );

  const isTheAnswer = id && answerCode && id === answerCode;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={clicked}
      className={`button ${
        clicked ? (!isTheAnswer ? "incorrect no-hover" : "") : ""
      }`}
    >
      {text}
    </button>
  );
};
