import { ReactElement } from "react";
import "./ModalDialog.scss";

type Props = {
  width?: string;
  height?: string;
  children: ReactElement<any, any>[];
};
export const ModalDialog = ({
  width = "20vw",
  height = "20vh",
  children,
}: Props) => {
  return (
    <div className="modal">
      <div className="modal-body" style={{ width, height }}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
