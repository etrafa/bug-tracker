const ShowAllUsers = ({
  allUsers,
  selectedUsers,
  setSelectedUsers,
  assignUserError,
  setAssignUserError,
  selectedUserID,
  setSelectedUserID,
}) => {
  //* add-remove user when initializing new ticket
  const handleSelectedUsers = (e, user) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setSelectedUsers((prev) => [...prev, user]);
      setSelectedUserID((prev) => [...prev, user.id]);
    } else {
      setSelectedUsers(selectedUsers.filter((val) => val !== user));
      setSelectedUserID(selectedUserID.filter((val) => val !== user.id));
    }
    setAssignUserError(false);
  };

  
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Assign User
      </label>
      <div
        className={
          assignUserError
            ? "bg-gray-50 flex flex-col h-44 overflow-auto border border-strongRed text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            : "bg-gray-50 flex flex-col h-44 overflow-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        }
      >
        {allUsers &&
          allUsers.map((user) => (
            <label key={user?.id} className="text-lg p-1">
              <input
                onChange={(e) => handleSelectedUsers(e, user)}
                className="mr-4"
                value={user?.fullName}
                name="assignedUsers"
                type="checkbox"
              />
              {user?.fullName}
            </label>
          ))}
      </div>
    </>
  );
};

export default ShowAllUsers;
