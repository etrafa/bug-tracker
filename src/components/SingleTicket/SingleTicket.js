//firebase
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetNestedSingleDoc } from "../../customHooks/useGetNestedSingleDoc";

//react
import { useParams } from "react-router-dom";

//components
import TicketComments from "./TicketComments";
import TicketInformations from "./TicketInformations";

const SingleTicket = () => {
  const { ticketId } = useParams();
  const currentUser = useAuth();

  const { dbData } = useGetNestedSingleDoc(
    "users",
    currentUser,
    "tickets",
    ticketId
  );

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
