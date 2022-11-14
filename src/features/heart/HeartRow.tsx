import "./HeartRow.scss";

type Props = {
  numHearts: number;
  heartWidth?: string;
  heartHeight?: string;
};
export const HeartRow = ({ numHearts, heartWidth, heartHeight }: Props) => {
  return (
    <div className="heart-row">
      <h2>Lives:</h2>
      <div className="hearts">
        {[...Array(numHearts).keys()].map((number) => (
          <svg
            key={number}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width={heartWidth || "24"}
            height={heartHeight || "24"}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="#00000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};
