import { Doughnut } from "react-chartjs-2";

const TicketByType = ({ dbData }) => {
  //get tickets from database and assign to their priority
  let serverIssues = 0,
    bugsOrError = 0,
    design = 0,
    compability = 0,
    other = 0;

  if (dbData) {
    dbData.forEach((ticket) => {
      if (ticket.ticketType === "Server Issues") {
        serverIssues += 1;
      } else if (ticket.ticketType === "Bugs/Error") {
        bugsOrError += 1;
      } else if (ticket.ticketType === "Design") {
        design += 1;
      } else if (ticket.ticketType === "Compatibility") {
        compability += 1;
      } else if (ticket.ticketType === "Other") {
        other += 1;
      }
    });
  }

  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET TYPES
      </h1>
      {!dbData || dbData === undefined || dbData?.length === 0 ? (
        <p className="text-center py-12 lg:pt-24 font-bold">No ticket found.</p>
      ) : (
        <Doughnut
          className="max-h-64 mt-2"
          options={{
            plugins: {
              legend: {
                labels: "none",
              },
            },
          }}
          data={{
            labels: [
              "Bugs/Error",
              "Design",
              "Compatibility",
              "Server Issues",
              "Other",
            ],
            datasets: [
              {
                data: [serverIssues, bugsOrError, design, compability, other],
                backgroundColor: [
                  "#f37208",
                  "#089df3",
                  "#02ffdd",
                  "#f3084f",
                  "#2F3A8F",
                ],
                borderWidth: 0,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default TicketByType;
