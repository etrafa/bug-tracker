const ShowAllProjects = ({
  allProjects,
  setSelectedProjectName,
  setSelectedProjectID,
}) => {
  const handleChange = (e) => {
    let obj = JSON.parse(e.target.value);
    //for creating a new ticket get the selected project name and id to send back to database
    setSelectedProjectName(obj.projectName);
    setSelectedProjectID(obj.id);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Select Project
      </label>
      <select
        name="selectedProject"
        onChange={(e) => handleChange(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      >
        <option value="pleaseselect">Please Select</option>
        {allProjects &&
          allProjects.map((project) => (
            <option
              key={project?.id}
              id={project?.id}
              value={JSON.stringify(project)}
            >
              {project?.projectName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ShowAllProjects;
