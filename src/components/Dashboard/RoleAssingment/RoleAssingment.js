import { useState } from "react";
import SubmitButton from "../../Utilities/SubmitButton";

const RoleAssingment = ({ dbData }) => {
  //track current user's role
  const [currentUserRole, setCurrentUserRole] = useState("");

  //assing user new role

  const [assignNewRole, setAssignNewRole] = useState("");

  return (
    <div className="lg:w-4/12">
      <h4 className="text-2xl mt-16 ml-5">Select User</h4>
      <div className="w-11/12 mt-1 mx-auto">
        <select size={5} className="w-full border-2 border-black">
          {dbData &&
            dbData.map((users) => (
              <option
                key={users?.id}
                onClick={() => setCurrentUserRole(users?.role)}
                className="mt-2 pl-4 text-lg"
              >
                {users?.fullName}
              </option>
            ))}
        </select>
      </div>
      <hr className="mt-4 w-11/12 mx-auto" />
      <div>
        <h4 className="text-2xl mt-8 ml-5">Select the Role to Assign</h4>
        <select
          onChange={(e) => setAssignNewRole(e.target.value)}
          className="w-11/12 border border-black mt-2 mx-auto ml-2"
        >
          <option disabled>Please Select</option>
          <option>Admin</option>
          <option>Developer</option>
          <option>Project Manager</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex flex-col my-8 ml-2">
        <span>Current Role : {currentUserRole} </span>
        <span>Selected Role : {assignNewRole}</span>
      </div>
      <SubmitButton />
    </div>
  );
};

export default RoleAssingment;
