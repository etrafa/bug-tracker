import { Bar } from "react-chartjs-2";

const TicketBySituation = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET SITUATION
      </h1>
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
              data: [3, 4, 5],
              backgroundColor: ["green", "orange", "red"],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketBySituation;
