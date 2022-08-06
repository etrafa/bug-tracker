import { doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { TrackerContext } from "../../../context/TrackerContext";
import { useGetDocsArrayQuery } from "../../../customHooks/useGetDocsArrayQuery";
import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";
import { db, updateTicket, useAuth } from "../../../firebase/firebaseConfig";

const EditTicketModal = ({ setEditTicketOpen }) => {
  const currentUser = useAuth();

  const { currentTicketID } = useContext(TrackerContext); // get current ticket id

  const [singleTicket, setSingleTicket] = useState();

  //get current ticket info
  // const { dbData } = useGetSingleDoc(
  //   `users/${currentUser?.uid}/tickets`,
  //   currentTicketID
  // );

  console.log(currentTicketID);
  const { dbData } = useGetDocsArrayQuery(
    "tickets",
    "userEmails",
    currentUser?.email
  );
  //filter the ticket
  useEffect(() => {
    dbData?.map((item) => {
      if (item.id === currentTicketID) {
        setSingleTicket(item);
      }
    });
  }, [currentTicketID, dbData]);

  const ticketPriority = ["Low", "Medium", "High"];
  const ticketStatus = ["Open", "In Progress", "Closed"];
  const ticketTypes = [
    "Server Issues",
    "Bugs/Error",
    "Design",
    "Compatibility",
    "Other",
  ];

  const [updatedTicket, setUpdatedTicket] = useState();

  useEffect(() => {
    const timeStamp = new Date();
    const day = String(timeStamp.getDate()).padStart(2, "0");
    const month = String(timeStamp.getMonth() + 1).padStart(2, "0");
    const year = timeStamp.getFullYear();

    const SERVER_TIME = [month, day, year].join(".");

    if (dbData) {
      setUpdatedTicket({
        assignedUsers: singleTicket?.assignedUsers,
        projectName: singleTicket?.projectName,
        submitTime: SERVER_TIME,
        ticketDescription: singleTicket?.ticketDescription,
        ticketOwner: singleTicket?.ticketOwner,
        ticketPriority: singleTicket?.ticketPriority,
        ticketStatus: singleTicket?.ticketStatus,
        ticketType: singleTicket?.ticketType,
      });
    }
  }, [singleTicket]);

  const updateTicketHandler = async (e) => {
    e.preventDefault();
    //1.update ticket in the project section in the firebase firestore
    updateTicket(singleTicket?.ticketDescription, updatedTicket);
    // 2.update ticket in the userID + ticket section for each user in the firestore
    // const userRef = `users/${currentUser?.uid}/tickets/${currentTicketID}`;
    // await updateDoc(userRef, updateTicket);
    // dbData?.assignedUsers?.forEach(async (item) => {
    //   const userRef = doc(db, `users/${item?.id}/tickets`, currentTicketID);
    //   await updateDoc(userRef, updatedTicket);
    // });
  };

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl">
        <button
          onClick={() => setEditTicketOpen(false)}
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
            Edit your ticket
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Ticket Title
              </label>
              <input
                onChange={(e) => {
                  setUpdatedTicket((prev) => ({
                    ...prev,
                    ticketDescription: e.target.value,
                  }));
                }}
                type="text"
                name="ticketTitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={singleTicket?.ticketDescription}
              />
            </div>
            <div className="bg-gray-50 flex flex-wrap gap-x-1 gap-y-8 justify-between border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              <label className="text-center font-black text-sm">
                Priority
                <select
                  name="ticketTypeOption"
                  className="flex border w-32 h-8 text-center mt-1.5"
                  onChange={(e) => {
                    setUpdatedTicket((prev) => ({
                      ...prev,
                      ticketPriority: e.target.value,
                    }));
                  }}
                >
                  {ticketPriority.map((ticket, index) => (
                    <option key={index}>{ticket}</option>
                  ))}
                </select>
              </label>
              <label className="text-center font-black text-sm">
                Status
                <select
                  name="ticketTypeOption"
                  className="flex border w-32 h-8 text-center mt-1.5"
                  onChange={(e) => {
                    setUpdatedTicket((prev) => ({
                      ...prev,
                      ticketStatus: e.target.value,
                    }));
                  }}
                >
                  {ticketStatus.map((ticket, index) => (
                    <option key={index}>{ticket}</option>
                  ))}
                </select>
              </label>
              <label className="text-center font-black text-sm">
                Type
                <select
                  name="ticketTypeOption"
                  className="flex border w-32 h-8 text-center mt-1.5"
                  onChange={(e) => {
                    setUpdatedTicket((prev) => ({
                      ...prev,
                      ticketType: e.target.value,
                    }));
                  }}
                >
                  {ticketTypes.map((ticket, index) => (
                    <option key={index}>{ticket}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Assign team members (optional)
            </label>
            <div className="bg-gray-50 flex flex-col h-44 overflow-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></div>
            <button
              onClick={(e) => updateTicketHandler(e)}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit ticket
            </button>
            <button className="w-full bg-white text-blue-700 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Delete Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTicketModal;
