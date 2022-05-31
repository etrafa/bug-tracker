import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//firebase

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SignUp = () => {
  let auth = getAuth();
  let navigate = useNavigate();

  const [newUserInformation, setNewUserInformation] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    let newUser = { [event.target.name]: event.target.value };
    setNewUserInformation({ ...newUserInformation, ...newUser });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUserInformation);
    createUserWithEmailAndPassword(
      auth,
      newUserInformation.email,
      newUserInformation.password
    )
      .then((response) => {
        console.log("Success");
        updateProfile(auth.currentUser, {
          displayName: newUserInformation.fullname,
        });
        navigate("/dashboard-home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-slate-100">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            onChange={(e) => handleChange(e)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-400 text-white focus:outline-none my-1"
          >
            Create Account
          </button>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            to="/log-in"
            className="border-blue text-blue pl-1 text-blue-500"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
