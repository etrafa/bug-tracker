//components
import TicketPriority from "./TicketPriority";
import TicketStatus from "./TicketStatus";
import TicketType from "./TicketType";
import ShowAllProjects from "./ShowAllProjects";
import ShowAllUsers from "./ShowAllUsers";
import TicketDescription from "./TicketDescription";

//react
import { useState } from "react";

//hooks
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { createTicket, useAuth } from "../../../firebase/firebaseConfig";
import { useEffect } from "react";

const CreateNewTicketModal = ({ setIsTicketModalOpen }) => {
  //ticket states
  const [selectedTicketPriority, setSelectedTicketPriority] = useState("Low");
  const [selectedTicketStatus, setSelectedTicketStatus] = useState("Open");
  const [selectedTicketType, setSelectedTicketType] = useState("Server Issues");
  const [selectedProjectName, setSelectedProjectName] =
    useState("Please Select");
  const [selectedProjectID, setSelectedProjectID] = useState();
  const [ticketDescripitonInput, setTicketDescriptionInput] = useState("");
  //store-remove selected user's from the list
  const [selectedUsers, setSelectedUsers] = useState([]);

  //database call's
  //get projects from database
  const { dbData: allProjects } = useGetDocs("projects");

  //get users from database
  const { dbData: allUsers } = useGetDocs("users");

  //get current user information
  const currentUser = useAuth();

  //get current user information
  const [currentUserInformation, setCurrentUserInformation] = useState();

  useEffect(() => {
    setCurrentUserInformation(currentUser?.displayName);
  }, [currentUser, currentUserInformation]);

  console.log(currentUserInformation);

  //form validation errors
  const [assignUserError, setAssignUserError] = useState(false);
  const [ticketDescriptionError, setTicketDescriptionError] = useState(false);
  const [selectedProjectNameError, setSelectedProjectNameError] =
    useState(false);

  //submit success message
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  let singleTicket = [
    {
      ticketType: selectedTicketType,
      ticketPriority: selectedTicketPriority,
      ticketStatus: selectedTicketStatus,
      assignedUsers: selectedUsers,
      ticketDescripiton: ticketDescripitonInput,
      ticketOwner: currentUserInformation,
    },
  ];

  //send ticket to database
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUsers.length < 1) setAssignUserError(true);
    if (ticketDescripitonInput === "") setTicketDescriptionError(true);
    if (selectedProjectName === "Please Select")
      setSelectedProjectNameError(true);

    if (
      !assignUserError &&
      !ticketDescriptionError &&
      !selectedProjectNameError
    ) {
      createTicket(
        "projects",
        selectedProjectID,
        singleTicket,
        setIsSubmitSuccess,
        setIsTicketModalOpen
      );
    }
  };

  //collect all the ticket information in array object

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-screen-sm lg:max-h-[90vh] overflow-auto">
        <button
          onClick={() => setIsTicketModalOpen(false)}
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
            Create New Ticket
          </h3>

          <form className="space-y-6">
            <ShowAllProjects
              allProjects={allProjects}
              setSelectedProjectName={setSelectedProjectName}
              setSelectedProjectID={setSelectedProjectID}
              selectedProjectNameError={selectedProjectNameError}
              setSelectedProjectNameError={setSelectedProjectNameError}
            />
            <TicketDescription
              setTicketDescriptionInput={setTicketDescriptionInput}
              ticketDescriptionError={ticketDescriptionError}
              setTicketDescriptionError={setTicketDescriptionError}
            />
            <ShowAllUsers
              allUsers={allUsers}
              selectedUsers={selectedUsers}
              setSelectedUsers={setSelectedUsers}
              assignUserError={assignUserError}
              setAssignUserError={setAssignUserError}
            />

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Ticket Details
              </label>
              <div className="bg-gray-50 flex flex-wrap gap-x-1 gap-y-8 justify-between border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <TicketType setSelectedTicketType={setSelectedTicketType} />
                <TicketPriority
                  setSelectedTicketPriority={setSelectedTicketPriority}
                />
                <TicketStatus
                  setSelectedTicketStatus={setSelectedTicketStatus}
                />
              </div>
            </div>

            {/* submit success message here */}
            {isSubmitSuccess ? (
              <p className="text-green-500 font-bold">
                The ticket has been created successfully.
              </p>
            ) : null}

            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTicketModal;
