import "./Flag.scss";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { FlagApi } from "../../app/flagApi";

type Props = {};
export const Flag = (props: Props) => {
  const countryCode = useAppSelector(
    (state) => state.game.currentRound.answer!!.code
  );

  const [flagObjectUrl, setFlagObjectUrl] = useState<any>(undefined);

  useEffect(() => {
    FlagApi.getFlagForCode(countryCode)
      .then((res) => res.blob())
      .then(URL.createObjectURL)
      .then(setFlagObjectUrl);
  }, [countryCode, setFlagObjectUrl]);

  return flagObjectUrl ? (
    <img alt="source: https://flagpedia.net" src={flagObjectUrl} />
  ) : (
    <div className="loading-icon"></div>
  );
};
