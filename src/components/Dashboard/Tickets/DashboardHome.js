//components
import TicketByPriority from "./TicketByPriority";
import TicketBySituation from "./TicketBySituation";
import TicketByType from "./TicketByType";
import TicketToProject from "./TicketToProject";

//firebase

import { addTicketComment, useAuth } from "../../../firebase/firebaseConfig";
import { useGetDocsArrayQuery } from "../../../customHooks/useGetDocsArrayQuery";

const Tickets = () => {
  const currentUser = useAuth();

  //get user's ticket
  const { dbData } = useGetDocsArrayQuery(
    "tickets",
    "userEmails",
    currentUser?.email
  );

  addTicketComment();

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <h1 className="text-center text-4xl font-black my-4 text-fbFillColor">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-6">
        <TicketByPriority dbData={dbData} />
        <TicketByType dbData={dbData} />
        <TicketBySituation dbData={dbData} />
        <TicketToProject dbData={dbData} />
      </div>
    </div>
  );
};

export default Tickets;
