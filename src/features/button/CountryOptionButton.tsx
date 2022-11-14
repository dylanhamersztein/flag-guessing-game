import "./CountryOptionButton.scss";
import { useAppSelector } from "../../app/hooks";

type Props = {
  id?: any;
  text: string;
  onClick: (e: any) => void;
  clicked?: boolean;
};
export const CountryOptionButton = ({
  id,
  text,
  onClick,
  clicked = false,
}: Props) => {
  const answerCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isTheAnswer = answerCode && id === answerCode;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={clicked}
      className="button"
      // className={`button ${
      //   clicked ? (!isTheAnswer ? "incorrect no-hover" : "") : ""
      // }`}
    >
      {text}
    </button>
  );
};
