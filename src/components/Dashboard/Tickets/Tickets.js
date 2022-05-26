//components

import TicketByPriority from "./TicketByPriority";
import TicketBySituation from "./TicketBySituation";

const Tickets = () => {
  return (
    <div>
      <TicketByPriority />
      <TicketBySituation />
    </div>
  );
};

export default Tickets;
