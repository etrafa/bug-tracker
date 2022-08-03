//firebase
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

//react
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import TicketComments from "./TicketComments";
import TicketInformations from "./TicketInformations";
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";
import { useEffect } from "react";

const SingleTicket = () => {
  const { setEditTicketOpen, setCurrentTicketID } = useContext(TrackerContext); //get current project id
  const { ticketId } = useParams(); //get the ticket id
  const currentUser = useAuth();

  //get current ticket info
  const { dbData } = useGetSingleDoc(
    `users/${currentUser?.uid}/tickets`,
    ticketId
  );

  useEffect(() => {
    setCurrentTicketID(ticketId); // get current ticket id
  }, []);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12  bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          <h1>Details for Selected Ticket</h1>
          <div className="flex justify-evenly lg:mx-32">
            <Link to="/my-tickets">
              <p className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300">
                Go ticket list
              </p>
            </Link>
            <p
              onClick={() => setEditTicketOpen(true)}
              className="text-base underline text-center py-4 cursor-pointer hover:text-gray-300"
            >
              Edit Ticket
            </p>
          </div>
        </div>
        <div className="flex mx-auto gap-4 flex-col lg:flex-row my-12">
          <TicketInformations dbData={dbData} />
          <TicketComments dbData={dbData} ticketId={ticketId} />
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
