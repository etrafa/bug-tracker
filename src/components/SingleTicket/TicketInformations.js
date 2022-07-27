const TicketInformations = ({ dbData }) => {
  //create h2 tag for ticket informations
  const ticketElementsForHTML = [
    {
      element: "Ticket Title",
      value: dbData && dbData?.ticketDescription,
    },
    { element: "Project", value: dbData && dbData?.projectName },

    { element: "Author", value: dbData && dbData?.ticketOwner },
    {
      element: "Ticket Priority",
      value: dbData && dbData?.ticketPriority,
    },
    {
      element: "Ticket Status",
      value: dbData && dbData?.ticketStatus,
    },
    { element: "Ticket Type", value: dbData && dbData?.ticketType },

    { element: "Date", value: dbData && dbData?.submitTime },
  ];

  const ticketClassNames = [
    //* ticket priority conditions
    "text-center text-white font-bold text-sm h-6 w-14 bg-green-700 rounded-md mx-auto pt-1", //low priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-orange-400 rounded-md mx-auto pt-1", //medium priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-strongRed rounded-md mx-auto pt-1", //high priority
  ];

  return (
    <div className="w-full lg:w-6/12 max-w-2xl overflow-auto mt-12 mx-auto">
      <h2 className="text-center font-bold text-lg">Ticket Details</h2>
      <div className="grid grid-cols-2 mx-auto justify-center gap-8 mt-8">
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
          {dbData?.assignedUsers?.map((item, index) => (
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
