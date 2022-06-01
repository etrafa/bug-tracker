import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//firebase function
import { signUp } from "../../firebase/firebaseConfig";

//context
import { TrackerContext } from "../../context/TrackerContext";
import { useContext } from "react";

const SignUp = () => {
  const { setRequiredFieldModal, setSignUpErrorMessage } =
    useContext(TrackerContext);

  let navigate = useNavigate();

  const [newUserInformation, setNewUserInformation] = useState({
    fullName: "",
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
    //? SIMPLE FORM VALIDATION
    if (
      newUserInformation.fullName === "" ||
      newUserInformation.email === "" ||
      newUserInformation.password === "" ||
      newUserInformation.confirm_password === ""
    ) {
      setRequiredFieldModal(true);
      setSignUpErrorMessage("Please fill all the area!");
    } else if (
      newUserInformation.password !== newUserInformation.confirm_password
    ) {
      setRequiredFieldModal(true);
      setSignUpErrorMessage("Password must be same!");
    } else {
      signUp(
        newUserInformation.email,
        newUserInformation.password,
        newUserInformation.fullName,
        navigate("/")
      );
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-slate-100">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            required
            onChange={(e) => handleChange(e)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullName"
            placeholder="Full Name"
          />

          <input
            required
            onChange={(e) => handleChange(e)}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            required
            onChange={(e) => handleChange(e)}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            required
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
        </form>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/log-in">
            <span className="border-blue text-blue pl-1 text-blue-800 underline hover:text-blue-400">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
