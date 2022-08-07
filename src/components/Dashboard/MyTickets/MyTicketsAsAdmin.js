import { Link } from "react-router-dom";

const MyTicketsAsAdmin = ({ dbData }) => {
  console.log(dbData);

  return (
    <div className="w-full text-center overflow-auto lg:ml-6 border-r-2">
      <table className="w-full lg:mx-auto text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Project</th>
            <th className="px-6 py-3">Submitter</th>
            <th className="px-6 py-3">Created</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {dbData &&
            dbData?.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium">
                  {item.ticketDescription}
                </td>
                <td className="px-6 py-4">{item.projectName}</td>
                <td className="px-6 py-4">{item.ticketOwner}</td>
                <td className="px-6 py-4">{item.submitTime}</td>
                <Link to={`/my-tickets/${item.id}`}>
                  <td className="px-6 py-4 text-fbFillColor cursor-pointer underline hover:text-blue-700">
                    More details
                  </td>
                </Link>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTicketsAsAdmin;
