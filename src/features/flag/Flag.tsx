import "./Flag.scss";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";

type Props = {};
export const Flag = (props: Props) => {
  const countryCode = useAppSelector(
    (state) => state.game.currentRound.answer?.code
  );

  const [flagObjectUrl, setFlagObjectUrl] = useState<any>(undefined);

  useEffect(() => {
    fetch("https://countryflagsapi.com/png/" + countryCode)
      .then((res) => res.blob())
      .then(URL.createObjectURL)
      .then(setFlagObjectUrl);
  }, [countryCode, setFlagObjectUrl]);

  return (
    <>
      {flagObjectUrl ? (
        <img
          alt="Which country's flag is this?"
          className="question-flag"
          src={flagObjectUrl}
        />
      ) : (
        <div className="loading-icon"></div>
      )}
    </>
  );
};
