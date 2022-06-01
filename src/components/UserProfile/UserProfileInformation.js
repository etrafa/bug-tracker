const UserProfileInformation = () => {
  return (
    <div className="w-full lg:w-6/12 text-center overflow-auto lg:ml-6 border-r-2">
      <h1 className="text-4xl text-center mt-4">User Information</h1>
      {/* <div className="flex flex-col gap-8 mt-12">
        <label className="mb-2 text-base font-medium text-gray-900 dark:text-gray-300">
         
          <input
            type="text"
            name="projectDescription"
            placeholder="A meaningful message that everyone can understand."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            disabled
          />
        </label>
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
       
          <input
            type="text"
            name="projectDescription"
            placeholder="A meaningful message that everyone can understand."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            disabled
          />
        </label>

        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
       
          <input
            type="text"
            name="projectDescription"
            placeholder="A meaningful message that everyone can understand."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            
          />
        </label>
      </div> */}
      <table className="w-full mt-8">
        <tr>
          <td>Full Name</td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className="mt-20">Email Address</td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="mb-2 text-base font-medium text-gray-900 dark:text-gray-300">
              Role
            </label>
          </td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              disabled
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserProfileInformation;
