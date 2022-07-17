import { Doughnut } from "react-chartjs-2";

const TicketToPerson = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET ASSIGNED TO
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
          labels: ["Etem", "Laura"],
          datasets: [
            {
              data: [3, 4],
              backgroundColor: ["green", "orange"],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketToPerson;
