//components
import TicketAssignedToUser from "./TicketAssignedToUser";

//firebase
import { useAuth } from "../../../firebase/firebaseConfig";
import { useGetNestedDocs } from "../../../customHooks/useGetNestedDocs";

const MyTickets = () => {
  const currentUser = useAuth();

  //get all the tickets from user's database
  const { dbData } = useGetNestedDocs("users", currentUser, "tickets");

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6 block">
      <div className="w-11/12 mx-auto mt-24 relative border border-black pb-12">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-fbFillColor text-center text-white text-lg py-3">
          <h1 className="text-2xl font-extrabold tracking-wider">My Tickets</h1>
        </div>
        <div className="w-full mt-8 flex flex-col lg:flex-row lg:justify-between">
          {(dbData && dbData === undefined) ||
            (dbData?.length === 0 ? (
              <p className="text-center mt-12 font-bold w-full">
                No ticket found.
              </p>
            ) : (
              <TicketAssignedToUser dbData={dbData} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
