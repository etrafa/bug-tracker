import { Doughnut } from "react-chartjs-2";

const TicketByType = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12">
      <h1 className="text-center bg-red-400 text-white font-bold text-2xl">
        TICKET TYPES
      </h1>
      <div className="w-6/12 mx-auto">
        <Doughnut
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
                data: [3, 4, 5, 2],
                backgroundColor: ["green", "orange", "red", "blue"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default TicketByType;
