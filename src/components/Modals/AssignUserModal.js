import { useState } from "react";
import { useGetDocs } from "../../customHooks/useGetDocs";
import { addUser } from "../../firebase/firebaseConfig";
import LoadSpinner from "../Utilities/LoadSpinner";

const AssignUserModal = ({ setIsAssignUserModalOpen }) => {
  const { dbData, loading } = useGetDocs("users");
  const { dbData: projectList } = useGetDocs("projects");

  //SUBMIT FORM VALIDATION
  const [isFormValidated, setIsFormValidated] = useState(false);

  //store selected users
  const [selectedUsers, setSelectedUsers] = useState([]);

  //store selected project
  const [selectedProject, setSelectedProject] = useState("Please Select");

  //* add-remove user when initializing new project
  const handleSelectedUsers = (e, user) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setSelectedUsers((prev) => [...prev, user]);
    } else {
      setSelectedUsers(selectedUsers.filter((val) => val !== user));
    }
  };

  console.log(selectedUsers.length);

  //save selected user's to firebase database
  const sendSelectedUsersToDB = (e) => {
    e.preventDefault();
    if (isFormValidated) {
      addUser(
        "projects",
        selectedProject?.id,
        selectedUsers,
        setIsAssignUserModalOpen,
        selectedProject?.projectName,
        selectedProject
      );
    }
  };

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            onClick={() => console.log(setIsAssignUserModalOpen(false))}
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
            Assign New User
          </h3>
          <form
            onChange={() => {
              // if (
              //   selectedUsers.length !== 0 &&
              //   selectedProject !== "Please Select"
              // ) {
              //   setIsFormValidated(true);
              // } else {
              //   setIsFormValidated(false);
              // }

              selectedUsers.length === 0 && selectedProject === "Please Select"
                ? setIsFormValidated(false)
                : setIsFormValidated(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Select Project
              </label>
              <select
                onChange={(e) => setSelectedProject(JSON.parse(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              >
                <option>Please Select</option>
                {projectList?.map((project) => (
                  <option
                    className="leading-9"
                    key={project?.id}
                    value={JSON.stringify(project)}
                  >
                    {project?.projectName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Assign User
              </label>

              {loading && <LoadSpinner />}
              <div className="bg-gray-50 border h-44 overflow-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex flex-col w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                {dbData &&
                  dbData.map((user) => (
                    <label className="text-lg p-1 text-center">
                      <input
                        key={user?.id}
                        onClick={(e) => handleSelectedUsers(e, user)}
                        className="mr-4"
                        value={user?.fullName}
                        name="assignedUsers"
                        type="checkbox"
                      />
                      {user?.fullName}
                    </label>
                  ))}
              </div>
            </div>
            <button
              type="submit"
              onClick={sendSelectedUsersToDB}
              className={
                isFormValidated
                  ? "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  : "w-full pointer-events-none text-white bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignUserModal;
