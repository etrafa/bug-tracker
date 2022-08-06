//components
import MyTicketsAsUser from "./MyTicketsAsUser";

//firebase
import { useAuth } from "../../../firebase/firebaseConfig";
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";

import { useGetDocsArrayQuery } from "../../../customHooks/useGetDocsArrayQuery";
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";
import MyTicketsAsAdmin from "./MyTicketsAsAdmin";

const MyTickets = () => {
  const currentUser = useAuth();

  const { dbData } = useGetDocsArrayQuery(
    "tickets",
    "userEmails",
    currentUser?.email
  );

  //get current user's role
  const { dbData: userRole } = useGetSingleDoc("users", currentUser?.uid);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6 block">
      <div className="w-11/12 mx-auto mt-24 relative border border-black pb-12">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-fbFillColor text-center text-white text-lg py-3">
          <h1 className="text-2xl font-extrabold tracking-wider">
            My Tickets ({(dbData && dbData.length) || 0})
          </h1>
        </div>
        <div className="w-full mt-8 flex flex-col lg:flex-row lg:justify-between">
          {/* {userRole?.role === "user" && <MyTicketsAsUser dbData={dbData} />}
          {userRole?.role === "admin" && <MyTicketsAsAdmin />}
          {dbData === undefined && dbData?.length === 0 && (
            <p className="text-center mt-12 font-bold w-full">
              No ticket found
            </p>
          )} */}

          {(dbData && dbData === undefined) ||
            (dbData?.length === 0 ? (
              <p className="text-center mt-12 font-bold w-full">
                No ticket found.
              </p>
            ) : (
              <>
                {userRole?.role === "user" && (
                  <MyTicketsAsUser dbData={dbData} />
                )}
                {userRole?.role === "admin" && <MyTicketsAsAdmin />}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
