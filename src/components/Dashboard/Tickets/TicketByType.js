import { Doughnut } from "react-chartjs-2";

const TicketByType = ({ dbData }) => {
  //get tickets from database and assign to their priority
  let serverIssues = 0,
    bugsOrError = 0,
    design = 0,
    compabilitiy = 0,
    other = 0;

  console.log(dbData && dbData.tickets);

  if (dbData) {
    dbData.tickets.forEach((ticket) => {
      if (ticket.ticketType === "Server Issues") {
        serverIssues += 1;
      } else if (ticket.ticketType === "bugsOrError") {
        bugsOrError += 1;
      } else if (ticket.ticketType === "Design") {
        design += 1;
      } else if (ticket.ticketType === "Compatibility") {
        compabilitiy += 1;
      } else if (ticket.ticketType === "other") {
        other += 1;
      }
    });
  }

  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET TYPES
      </h1>
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
          labels: ["Bugs/Error", "Design", "Compatibility", "Server Issues"],
          datasets: [
            {
              data: [serverIssues, bugsOrError, design, compabilitiy, other],
              backgroundColor: ["#f37208", "#089df3", "#02ffdd", "#f3084f"],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketByType;
