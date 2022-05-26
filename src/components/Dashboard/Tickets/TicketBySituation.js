import { Bar } from "react-chartjs-2";

const TicketBySituation = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12">
      <h1 className="text-center bg-red-400 text-white font-bold text-2xl">
        TICKET PROGRESS
      </h1>
      <Bar
        options={{
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
