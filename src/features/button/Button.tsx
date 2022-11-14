import "./Button.scss";

type Props = {
  id?: any;
  text: string;
  onClick: (e: any) => void;
};
export const Button = ({ id, text, onClick }: Props) => {
  return (
    <button className="button" id={id} onClick={onClick}>
      {text}
    </button>
  );
};
