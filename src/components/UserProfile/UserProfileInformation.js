import { useAuth } from "../../firebase/firebaseConfig";

const UserProfileInformation = () => {
  const currentUser = useAuth();

  return (
    <div className="w-full md:w-9/12 mx-auto lg:w-6/12 text-center overflow-auto lg:ml-6 lg:border-r-2">
      <h1 className="text-4xl text-center mt-4">User Information</h1>

      <table className="w-full mt-8">
        <tr>
          <td>Full Name</td>
          <td>
            <input
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={currentUser?.displayName}
              type="text"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Email Address</td>
          <td>
            <input
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={currentUser?.email}
              type="text"
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
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value="User"
              type="text"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Created At</td>
          <td>
            <input
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={currentUser?.metadata?.creationTime.slice(5, 16)}
              type="text"
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Email Verified</td>
          <td>
            {/* <input
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              disabled
            /> */}
            <button
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-11/12 lg:w-6/12 h-10 p-2.5 lg:ml-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              disabled
            >
              {currentUser.emailVerified ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto"
                  viewBox="0 0 20 20"
                  fill="green"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#DC2626"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
            {/* <div class="relative">
              <span class="absolute inset-y-0 left-1/2 bottom-5 flex items-center justify-center pl-2">
                {currentUser?.emailVerified ? (
                 
                ) : (
                 
                )}
              </span>
              
            </div> */}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserProfileInformation;
