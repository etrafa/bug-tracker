const TicketInformations = ({ dbData }) => {
  //create h2 tag for ticket informations
  const ticketElementsForHTML = [
    {
      element: "Ticket Title",
      value: dbData && dbData?.tickets?.ticketDescription,
    },
    { element: "Project", value: dbData && dbData?.tickets?.projectName },

    { element: "Author", value: dbData && dbData?.tickets?.ticketOwner },
    {
      element: "Ticket Priority",
      value: dbData && dbData?.tickets?.ticketPriority,
    },
    {
      element: "Ticket Status",
      value: dbData && dbData?.tickets?.ticketStatus,
    },
    { element: "Ticket Type", value: dbData && dbData?.tickets?.ticketType },

    { element: "Date", value: dbData && dbData?.tickets?.submitTime },
  ];

  const ticketClassNames = [
    //* ticket priority conditions
    "text-center text-white font-bold text-sm h-6 w-14 bg-green-700 rounded-md mx-auto pt-1", //low priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-orange-400 rounded-md mx-auto pt-1", //medium priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-strongRed rounded-md mx-auto pt-1", //high priority
  ];

  return (
    <div className="w-full lg:w-6/12 max-w-2xl overflow-auto mt-12 mx-auto">
      <div className="grid grid-cols-2 mx-auto justify-center gap-8">
        {ticketElementsForHTML.map((el) => (
          <div>
            <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-28 h-8 pt-2 my-2 text-center mx-auto">
              {el?.element}
            </h2>
            <p
              className={
                el?.value === "Low"
                  ? ticketClassNames[0]
                  : el?.value === "Medium"
                  ? ticketClassNames[1]
                  : el?.value === "High"
                  ? ticketClassNames[2]
                  : "text-center text-gray-900 text-sm"
              }
            >
              {el?.value}
            </p>
          </div>
        ))}

        <div>
          <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-28 h-8 pt-2 my-2 text-center mx-auto">
            Users
          </h2>
          {dbData?.tickets?.assignedUsers?.map((item, index) => (
            <p className="text-center">
              <span>{index + 1}- </span>
              {item?.fullName}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketInformations;

// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center">
// Project
// </h2>
// <p className="text-center">{dbData?.tickets?.projectName}</p>
// </div>
// <div>
// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center mx-auto">
// Ticket Title
// </h2>
// <p className="text-center">{dbData?.tickets?.ticketDescription}</p>
// </div>
// <div>
// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center">
// Author
// </h2>
// <p className="text-center">{dbData?.tickets?.ticketOwner}</p>
// </div>
// </section>
// <section className="flex justify-between mx-3 lg:mx-4">
// <div>
// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center">
// Ticket Priority
// </h2>
// <p className="text-center">{dbData?.tickets?.ticketPriority}</p>
// </div>
// <div>
// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center">
// Ticket Status
// </h2>
// <p className="text-center">{dbData?.tickets?.ticketStatus}</p>
// </div>
// <div>
// <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-24 h-8 pt-2 my-2 text-center">
// Ticket Type
// </h2>
// <p className="text-center">{dbData?.tickets?.ticketType}</p>
// </div>
