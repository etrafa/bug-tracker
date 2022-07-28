//firebase
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

//react
import { useParams } from "react-router-dom";

//components
import TicketComments from "./TicketComments";
import TicketInformations from "./TicketInformations";
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";

const SingleTicket = () => {
  const { projectId } = useContext(TrackerContext); //get current project id
  const { ticketId } = useParams(); //get the ticket id

  console.log(projectId);
  //get current ticket info
  const { dbData } = useGetSingleDoc(`projects/${projectId}/tickets`, ticketId);

  console.log(dbData);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          Details for Selected Ticket
        </h1>
        <div className="flex mx-auto gap-4 flex-col lg:flex-row my-4">
          <TicketInformations dbData={dbData} />
          <TicketComments dbData={dbData} ticketId={ticketId} />
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
