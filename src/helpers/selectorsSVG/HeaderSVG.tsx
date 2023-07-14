interface Props {
  id: string;
}

const HeaderSVG = ({ id }: Props) => {
  switch (id) {
    case "defaultUserIcon":
      return (
        <svg
          className=" me-0 me-xxl-5 ms-2"
          width="50"
          height="50"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2011_6218"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18.153" cy="18.2526" r="17.5292" fill="#FFC145" />
          </mask>
          <g mask="url(#mask0_2011_6218)">
            <circle cx="18.153" cy="18.2526" r="17.5292" fill="#FFC145" />
            <path
              d="M28.9857 37.8702V34.2894C28.9857 32.39 28.415 30.5684 27.3993 29.2253C26.3835 27.8822 25.0058 27.1277 23.5693 27.1277H12.7365C11.3 27.1277 9.92227 27.8822 8.9065 29.2253C7.89072 30.5684 7.32007 32.39 7.32007 34.2894V37.8702"
              fill="#197BBD"
            />
            <path
              d="M18.1515 21.7105C21.1429 21.7105 23.5679 19.2855 23.5679 16.2941C23.5679 13.3027 21.1429 10.8777 18.1515 10.8777C15.1601 10.8777 12.7351 13.3027 12.7351 16.2941C12.7351 19.2855 15.1601 21.7105 18.1515 21.7105Z"
              fill="white"
            />
          </g>
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
export default HeaderSVG;