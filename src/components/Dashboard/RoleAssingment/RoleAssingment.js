import SubmitButton from "../../Utilities/SubmitButton";
import { useState } from "react";

import { updateUserRole } from "../../../firebase/firebaseConfig";

const RoleAssingment = ({ dbData }) => {
  //track current user's role
  const [currentUserRole, setCurrentUserRole] = useState("");

  //assing user new role
  const [assignNewRole, setAssignNewRole] = useState("");

  //track selected user's id
  const [selectedUserID, setSelectedUserID] = useState("");

  //show success message after role change
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //if there is any error show error message after role change
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <div className="lg:w-4/12">
      <h4 className="text-2xl mt-16 ml-5">Select User</h4>
      <div className="w-11/12 mt-1 mx-auto">
        <select size={5} className="w-full border-2 border-black">
          {dbData &&
            dbData.map((users) => (
              <option
                key={users?.id}
                onClick={() => {
                  setCurrentUserRole(users?.role);
                  setSelectedUserID(users?.id);
                }}
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
        {showSuccessMessage && (
          <p className="text-green-400 font-bold mt-4">
            The user's role has been changed successfully.
          </p>
        )}
        {showErrorMessage && (
          <p className="text-red-600 font-bold mt-4">
            An error happened. Please try again.
          </p>
        )}
      </div>

      {/* //* if user or user's role has not been selected disable the button so user can't click */}
      {selectedUserID && assignNewRole ? (
        <SubmitButton
          clickHandler={() =>
            updateUserRole(
              selectedUserID,
              assignNewRole,
              setShowSuccessMessage,
              setShowErrorMessage
            )
          }
        />
      ) : null}
    </div>
  );
};

export default RoleAssingment;
