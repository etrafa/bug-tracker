import { Bar } from "react-chartjs-2";

const TicketByPriority = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET PRIORITY
      </h1>
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
              data: [3, 4, 5],
              backgroundColor: ["green", "orange", "red"],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketByPriority;
