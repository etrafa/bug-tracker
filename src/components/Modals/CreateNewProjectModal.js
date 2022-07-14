//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const CreateNewProjectModal = ({
  setIsProjectModalOpen,
  setIsTicketModalOpen,
}) => {
  const [createProjectInformation, setCreateProjectInformation] = useState({
    projectName: "",
    projectDescription: "",
    assignedUsers: [],
    tickets: [],
  });

  //firebase ref
  const collectionRef = collection(db, "projects");

  //SUBMIT FORM VALIDATION
  const [isFormValidated, setIsFormValidated] = useState(false);

  //ON INPUT CHANGE SAVE USER'S PROJECT NAME & DESCRIPTION
  const handleInput = (event) => {
    let newProject = { [event.target.name]: event.target.value };
    setCreateProjectInformation({ ...createProjectInformation, ...newProject });

    //*form validation
    if (
      createProjectInformation.projectName.length >= 1 &&
      createProjectInformation.projectDescription.length >= 1
    ) {
      setIsFormValidated(true);
    }
  };

  //ON SUBMIT SAVE SAVE USER'S PROJECT NAME & DESCRIPTION TO DATABASE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValidated) {
      addDoc(collectionRef, {
        projectName: createProjectInformation.projectName,
        projectDescription: createProjectInformation.projectDescription,
        assignedUsers: createProjectInformation.assignedUsers,
        tickets: createProjectInformation.tickets,
      }).then(() => {
        setIsProjectModalOpen(false);
        setIsTicketModalOpen(true);
      });
    }
  };

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <button
          onClick={() => setIsProjectModalOpen(false)}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
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
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create New Project
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Project Name
              </label>
              <input
                onChange={(event) => handleInput(event)}
                type="text"
                name="projectName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Landing Page"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Project Description
              </label>
              <input
                onChange={(event) => handleInput(event)}
                type="text"
                name="projectDescription"
                placeholder="A meaningful message that everyone can understand."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              onClick={(event) => handleSubmit(event)}
              type="submit"
              className={
                isFormValidated
                  ? "w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  : "w-full pointer-events-none text-white bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              }
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProjectModal;
