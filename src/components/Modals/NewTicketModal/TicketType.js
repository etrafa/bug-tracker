const TicketType = ({ setSelectedTicketType }) => {
  const ticketTypes = [
    "Server Issues",
    "Bugs/Error",
    "Design",
    "Compatibility",
    "Other",
  ];

  return (
    <label className="text-center font-black text-sm">
      Type
      <select
        onChange={(e) => setSelectedTicketType(e.target.value)}
        name="ticketTypeOption"
        className="flex border w-32 h-8 text-center mt-1.5"
      >
        {ticketTypes.map((ticket, index) => (
          <option key={index}>{ticket}</option>
        ))}
      </select>
    </label>
  );
};

export default TicketType;
