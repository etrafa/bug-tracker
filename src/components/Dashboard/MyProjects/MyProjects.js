//useGetDocs Hook
import { useGetDocs } from "../../../customHooks/useGetDocs";

//React
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import LoadSpinner from "../../Utilities/LoadSpinner";
import { useContext } from "react";
import { TrackerContext } from "../../../context/TrackerContext";
import { useAuth } from "../../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";

const MyProjects = () => {
  //get current user and their role
  const currentUser = useAuth();
  const { dbData: userRole } = useGetSingleDoc("users", currentUser?.uid);

  //IF USER ROLE IS ADMIN => THEY CAN SEE ALL PROJECTS IN THE DATABASE
  //IF USER ROLE IS USER/DEVELOPER => THEY CAN ONLY SEE PROJECTS ASSIGNED TO THEM

  const [query, setQuery] = useState("");
  const { dbData: allProjects, loading } = useGetDocs(query);

  useEffect(() => {
    if (userRole) {
      userRole?.role === "admin"
        ? setQuery("projects")
        : setQuery(`users/${currentUser?.uid}/my-projects`);
    }
  }, [query, userRole?.role]);

  console.log(userRole?.role);

  //filter search result
  const [searchTerm, setSearchTerm] = useState("");

  //set project ID
  const { setProjectId } = useContext(TrackerContext);

  //pagination show only 10 user's per page
  const [pageNumber, setPageNumber] = useState(0);
  const PROJECT_PER_PAGE = 5;
  const pagesVisited = pageNumber * PROJECT_PER_PAGE;
  const pageCount = Math.ceil(allProjects?.length / PROJECT_PER_PAGE);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const showProjects = allProjects
    ?.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.projectName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + PROJECT_PER_PAGE)
    .map((project) => {
      return (
        <tr
          key={project?.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {project.projectName}
          </th>
          <td className="px-6 py-4">{project.projectDescription}</td>
          <td className="px-6 py-4">
            <ul className="list-disc">
              <Link to={`/manage-project-user`}>
                {userRole?.role === "admin" ? (
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Manage Users
                  </li>
                ) : null}
              </Link>
              <Link to={`/my-projects/${project.id}`}>
                <li
                  onClick={() => setProjectId(project?.id)}
                  className="text-fbFillColor cursor-pointer underline hover:text-black mt-3"
                >
                  Details
                </li>
              </Link>
            </ul>
          </td>
        </tr>
      );
    });

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          My Projects
        </h1>
        <div class="pl-4 pt-12">
          {loading && <LoadSpinner />}
          {allProjects?.length >= 1 ? (
            <>
              <label className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Project"
                />
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3">Project Name</th>
                    <th className="px-6 py-3">Project Description</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>{showProjects}</tbody>
              </table>
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </>
          ) : (
            <p className="my-12 text-center font-bold">No ticket found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
