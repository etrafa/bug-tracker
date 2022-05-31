import { Bar } from "react-chartjs-2";

const TicketByPriority = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 ">
      <h1 className="text-center bg-gray-400 text-white font-bold text-2xl">
        TICKET PRIORITY
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
