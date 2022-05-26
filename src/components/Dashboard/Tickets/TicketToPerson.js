import { Doughnut } from "react-chartjs-2";

const TicketToPerson = () => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12">
      <h1 className="text-center bg-red-400 text-white font-bold text-2xl">
        TICKET ASSIGNED TO
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
    </div>
  );
};

export default TicketToPerson;
