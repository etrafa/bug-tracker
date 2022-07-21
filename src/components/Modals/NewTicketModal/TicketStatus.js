const TicketStatus = ({ setSelectedTicketStatus }) => {
  const ticketStatus = ["Open", "In Progress"];

  return (
    <label className="text-center font-black text-sm">
      Status
      <select
        onChange={(e) => setSelectedTicketStatus(e.target.value)}
        name="ticketTypeOption"
        className="flex border w-32 h-8 text-center mt-1.5"
      >
        {ticketStatus.map((ticket, index) => (
          <option key={index}>{ticket}</option>
        ))}
      </select>
    </label>
  );
};

export default TicketStatus;
