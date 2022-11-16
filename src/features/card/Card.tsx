import { ReactElement } from "react";
import "./Card.scss";

type Props = {
  width?: string;
  height?: string;
  children: ReactElement<any, any> | ReactElement<any, any>[];
};
export const Card = ({ width, height, children }: Props) => (
  <div className="card" style={{ width, height }}>
    {children}
  </div>
);
