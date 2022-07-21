const TicketPriority = ({ setSelectedTicketPriority }) => {
  const ticketPriority = ["Low", "Medium", "High"];

  return (
    <label className="text-center font-black text-sm">
      Priority
      <select
        onChange={(e) => setSelectedTicketPriority(e.target.value)}
        name="ticketTypeOption"
        className="flex border w-32 h-8 text-center mt-1.5"
      >
        {ticketPriority.map((ticket, index) => (
          <option key={index}>{ticket}</option>
        ))}
      </select>
    </label>
  );
};

export default TicketPriority;
