const SubmitButton = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      className="bg-fbFillColor hover:bg-blue-500 w-44 h-10 mb-4 mx-auto block text-white text-lg font-bold"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
