interface Props {
  id: string;
}

const ArrowsSVG = ({ id }: Props) => {
  switch (id) {
    case "ArrowLeft":
      return (
        <svg
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5969 1.67163L1.9635 11.3051L11.5969 20.9385"
            stroke="#7e4cd7d9"
            strokeWidth="2.58466"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ArrowRight":
      return (
        <svg
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.49229 1.67163L11.1257 11.3051L1.49229 20.9385"
            stroke="#7e4cd7d9"
            strokeWidth="2.58466"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
export default ArrowsSVG;
