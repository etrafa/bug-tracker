import { Doughnut } from "react-chartjs-2";

const TicketByType = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET TYPES
      </h1>
      <Doughnut
        className="max-h-72"
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
              backgroundColor: ["#f37208", "#089df3", "#02ffdd", "#f3084f"],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketByType;
