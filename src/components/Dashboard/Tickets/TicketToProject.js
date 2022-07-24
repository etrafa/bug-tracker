import { Doughnut } from "react-chartjs-2";

const TicketToProject = ({ dbData }) => {
  //push the project name's from db to this array and show them as label
  let projectLabels = [];
  //push project's ticket to this array and show them as data
  let projectLabelsData = [];

  //dynamically create chart colors based on how many projects user's have
  const chartColors = [];

  if (dbData) {
    dbData?.forEach((ticket) => {
      //take projects assigned to user's and push them into this array
      projectLabels.push(ticket.tickets.projectName);
    });

    /* see how many tickets one project have and push that into array 
    so we can show on chartJS data. */
    var counts = {};
    for (var i = 0; i < projectLabels.length; i++)
      if (i >= projectLabels.length) return (i = 0);
    if (projectLabels[i] in counts) {
      counts[projectLabels[i]]++;
    } else {
      counts[projectLabels[i]] = 1;
    }
  }

  if (counts) {
    const objMap = new Map(Object.entries(counts));
    objMap.forEach((item) => {
      projectLabelsData.push(item);
    });
  }

  //adjust chart color depending on the length of the array
  const colors = [
    "#f37208",
    "#089df3",
    "#02ffdd",
    "#f3084f",
    "#2F3A8F",
    "#CD113B",
  ];
  for (let i = 0; i <= projectLabelsData.length; i++) {
    chartColors.push(colors[i]);
  }

  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        TICKET ASSIGNED TO
      </h1>
      <Doughnut
        className="max-h-64 mt-2"
        options={{
          plugins: {
            legend: {
              labels: "none",
            },
          },
        }}
        data={{
          labels: projectLabels,
          datasets: [
            {
              data: projectLabelsData,
              backgroundColor: chartColors,
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketToProject;
