import errorIcon from "../../assets/error-icon.svg";

//context
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";

const SignUpMessageModal = ({ setRequiredFieldModal }) => {
  const { signUpErrorMessage } = useContext(TrackerContext);

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50 text-center">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            onClick={() => setRequiredFieldModal(false)}
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="py-6 px-6 lg:px-8">
          <img className="mx-auto w-12 my-6" src={errorIcon} alt="success" />
          <h1 className="mb-4 text-4xl font-medium text-gray-900 dark:text-white">
            {signUpErrorMessage}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpMessageModal;
