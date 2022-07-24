//chartjs
import { Bar } from "react-chartjs-2";

const TicketBySituation = ({ dbData }) => {
  //get tickets from database and assign to their situation
  let openStatus = 0,
    inProgressStatus = 0,
    closedStatus = 0;

  if (dbData) {
    dbData?.forEach((ticket) => {
      if (ticket.tickets.ticketStatus === "Open") {
        openStatus += 1;
      } else if (ticket.tickets.ticketStatus === "In Progress") {
        inProgressStatus += 1;
      } else if (ticket.tickets.ticketStatus === "Closed") {
        closedStatus += 1;
      }
    });
  }

  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET SITUATION
      </h1>

      {!dbData || dbData === undefined || dbData?.length === 0 ? (
        <p className="text-center py-12 lg:pt-24 font-bold">No ticket found.</p>
      ) : (
        <Bar
          className="max-h-72"
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0,
                  callback: (yValue) => {
                    return Math.floor(yValue);
                  },
                },
              },
            },
            plugins: {
              legend: {
                labels: "none",
              },
            },
          }}
          data={{
            labels: ["Open", "In Progress", "Closed"],
            datasets: [
              {
                data: [openStatus, inProgressStatus, closedStatus],
                backgroundColor: ["#3CCF4E", "#2F3A8F", "#CD113B"],
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default TicketBySituation;
