import React from "react";

const RoleAssingment = () => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <h1 className="text-center text-4xl font-bold my-4">Manage User Roles</h1>
      <h4 className="text-2xl mt-16 ml-5">
        Select User : <span>Laura</span>
      </h4>
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
        <select className="w-96 border border-black ml-4 mt-2">
          <option>Developer</option>
          <option>Project Manager</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
      <button className="mt-8 bg-mainGreen w-44 h-12 mx-auto block text-white text-lg font-bold">
        Submit
      </button>
    </div>
  );
};

export default RoleAssingment;
