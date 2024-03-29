const TicketDescription = ({ setTicketDescriptionInput }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Ticket Description
      </label>
      <input
        type="text"
        required
        onChange={(e) => {
          setTicketDescriptionInput(e.target.value);
        }}
        placeholder="A meaningful message that everyone can understand."
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      />
    </div>
  );
};

export default TicketDescription;
