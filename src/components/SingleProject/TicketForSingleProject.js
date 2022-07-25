import { useGetNestedDocs } from "../../customHooks/useGetNestedDocs";
const TicketForSingleProject = () => {
  const { dbData } = useGetNestedDocs(
    "projects",
    "YPbF32nv8rIoGUUFNmo6",
    "tickets"
  );

  if (dbData) {
    dbData?.map((item) => console.log(item?.tickets[0]));
  }

  return (
    <div className="w-full lg:w-6/12 text-center overflow-auto mr-16">
      <header className="lg:mx-auto">
        <h1 className="text-4xl text-black pt-4 font-bold">
          Tickets for this Project
        </h1>
        <h4 className="text-black py-4">Condensed Ticket Details</h4>
      </header>

      {/* IF THERE IS NO TICKET DISPLAY NO TICKET 
    OTHERWISE SHOW EXISTING TICKETS ON UI */}

      {dbData && dbData?.length === 0 ? (
        <p className="mt-24 font-bold">No ticket found</p>
      ) : (
        <div>
          <div className="relative mt-1 lg:mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Ticket"
            />
          </div>
          <table className="w-full  lg:mx-auto text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Submitter</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            {dbData &&
              dbData?.map((ticket) => (
                <>
                  <td className="px-6 py-4">
                    {ticket.tickets?.ticketDescripiton}
                  </td>
                  <td className="px-6 py-4">{ticket.tickets?.ticketOwner}</td>
                  <td className="px-6 py-4">{ticket.tickets?.ticketStatus}</td>
                  <td className="px-6 py-4">{ticket.tickets?.submitTime}</td>
                  <td className="px-6 py-4">More details</td>
                </>
              ))}
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketForSingleProject;
