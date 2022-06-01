import SubmitButton from "../Utilities/SubmitButton";

const UserChangePassword = () => {
  return (
    <div className="w-full md:w-9/12 mx-auto lg:w-6/12 text-center overflow-auto lg:ml-6">
      <h1 className="text-4xl text-center mt-6">Change Password</h1>
      <table className="w-full mt-8">
        <tr>
          <td>Old Password</td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </td>
        </tr>
        <tr>
          <td>New Password</td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="mb-2 text-base font-medium text-gray-900 dark:text-gray-300">
              Confirm Password
            </label>
          </td>
          <td>
            <input
              type="password"
              name="projectDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </td>
        </tr>
      </table>
      <div className="mt-12">
        <SubmitButton />
      </div>
    </div>
  );
};

export default UserChangePassword;

{
  /* <div className="flex flex-col gap-8 mt-12">
        <label className="mb-2 text-base font-medium text-gray-900 dark:text-gray-300">
          Old Password
          <input
            type="password"
            name="projectDescription"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </label>
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          New Password
          <input
            type="password"
            name="projectDescription"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </label>

        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Confirm New Password
          <input
            type="password"
            name="projectDescription"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </label>
      </div> */
}
