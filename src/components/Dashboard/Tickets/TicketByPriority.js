//chartjs
import { Bar } from "react-chartjs-2";

const TicketByPriority = ({ dbData }) => {
  //get tickets from database and assign to their priority
  let lowPriority = 0,
    mediumPriority = 0,
    highPriority = 0;

  // if (dbData && dbData !== undefined) {
  //   dbData?.tickets?.forEach((ticket) => {
  //     console.log(ticket);
  //     // if (ticket.ticketPriority === "Low") {
  //     //   lowPriority += 1;
  //     // } else if (ticket.ticketPriority === "Medium") {
  //     //   mediumPriority += 1;
  //     // } else if (ticket.ticketPriority === "High") {
  //     //   highPriority += 1;
  //     // }
  //   });
  // }

  // if (dbData) {
  //   dbData.forEach((ticket) => {
  //     console.log(ticket.tickets);
  //   });
  // }

  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET PRIORITY
      </h1>
      {!dbData || (dbData === undefined && <p>No ticket found</p>)}
      {/* {dbData && dbData.tickets.length === 0 ? (
        <p className="text-center py-12 lg:pt-24 font-bold">No ticket found.</p>
      ) : (
        <Bar
          className="max-h-72 bg-gray-50"
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
            labels: ["Low", "Medium", "High"],
            datasets: [
              {
                data: [lowPriority, mediumPriority, highPriority],
                backgroundColor: ["#3CCF4E", "#2F3A8F", "#CD113B"],
              },
            ],
          }}
        />
      )} */}
    </div>
  );
};

export default TicketByPriority;
