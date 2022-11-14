import "./Flag.scss";
import { useAppSelector } from "../../app/hooks";

type Props = {};
export const Flag = (props: Props) => {
  const countryCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code
  );
  return (
    <img
      style={{ marginTop: "5vh" }}
      className="question-flag"
      src={"https://countryflagsapi.com/png/" + countryCode}
      alt="Which flag is this?"
    />
  );
};
