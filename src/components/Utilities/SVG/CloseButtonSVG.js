const CloseButtonSVG = (props) => {
  return (
    <svg
      onClick={props.clickHandler}
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 ml-auto mr-4 mt-4 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseButtonSVG;
