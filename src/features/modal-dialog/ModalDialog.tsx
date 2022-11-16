import { ReactElement } from "react";
import "./ModalDialog.scss";

type Props = {
  children: ReactElement<any, any> | ReactElement<any, any>[];
};
export const ModalDialog = ({ children }: Props) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
