const RoleAssingment = () => {
  return (
    <div className="lg:w-4/12">
      <h4 className="text-2xl mt-16 ml-5">Select User</h4>
      <div className="w-11/12 mt-1 mx-auto">
        <select size={5} className="w-full border-2 border-black">
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
          <option className="mt-2 pl-4 text-lg">Etem-Laura</option>
        </select>
      </div>
      <hr className="mt-4 w-11/12 mx-auto" />
      <div>
        <h4 className="text-2xl mt-8 ml-5">Select the Role to Assign</h4>
        <select className="w-11/12 border border-black mt-2 mx-auto ml-2">
          <option>Developer</option>
          <option>Project Manager</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex flex-col my-8 ml-2">
        <span>Selected User : -</span>
        <span>Selected Role : -</span>
      </div>
      <button className=" bg-mainGreen w-44 h-12 mx-auto block text-white text-lg font-bold">
        Submit
      </button>
    </div>
  );
};

export default RoleAssingment;
