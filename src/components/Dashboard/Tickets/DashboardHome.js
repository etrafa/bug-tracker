//components

import TicketByPriority from "./TicketByPriority";
import TicketBySituation from "./TicketBySituation";
import TicketByType from "./TicketByType";
import TicketToPerson from "./TicketToPerson";

const Tickets = () => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <h1 className="text-center text-4xl font-bold my-4 text-red-300">
        Dashboard
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <TicketByPriority />
        <TicketByType />
        <TicketBySituation />
        <TicketToPerson />
      </div>
    </div>
  );
};

export default Tickets;
