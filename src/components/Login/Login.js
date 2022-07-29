import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//firebase
import { signIn } from "../../firebase/firebaseConfig";

//context
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";

const Login = () => {
  const navigate = useNavigate();

  const { setSignUpErrorMessage, setRequiredFieldModal } =
    useContext(TrackerContext);

  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let loginData = { [event.target.name]: event.target.value };
    setLoginInformation({ ...loginInformation, ...loginData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(loginInformation.email, loginInformation.password)
      .then(() => navigate("/"))
      .catch(() => {
        setRequiredFieldModal(true);
        setSignUpErrorMessage("Email or password is invalid.");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100 ">
      <h1 className="font-semibold text-5xl text-center leading-tight">
        Bug Tracker
      </h1>

      <hr className=" w-9/12 mt-4 max-w-lg" />
      <form className="flex flex-col w-full mx-auto items-center mt-8 md:w-8/12 lg:w-8/12 xl:w-6/12">
        <h2 className="mb-4 font-bold">Login your account</h2>
        <input
          className="border-2 w-10/12 h-12 lg:w-6/12 pl-2 placeholder:text-lg"
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border-2 w-10/12 h-12 mt-2 lg:w-6/12 pl-2 placeholder:text-lg"
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          placeholder="Password"
        />

        <button
          className="bg-fbFillColor hover:bg-blue-500 my-6 w-7/12 h-12 lg:w-4/12 text-white font-bold"
          onClick={(e) => handleSubmit(e)}
        >
          Sign In
        </button>
      </form>
      <div>
        <p>
          Don't have an account?
          <Link to="/create-account">
            <span className="underline cursor-pointer pl-1 hover:text-gray-600">
              Sign up here
            </span>
            .
          </Link>
        </p>
        <p
          onClick={() => signIn("testdeveloper@gmail.com", 123456789)}
          className="mt-2 underline cursor-pointer hover:text-gray-600"
        >
          Sign in as a Demo User
        </p>
        <p
          onClick={() => signIn("kayhankayhan@hotmail.com", 123456789)}
          className="mt-2 underline cursor-pointer hover:text-gray-600"
        >
          Sign in as a Admin
        </p>
      </div>
    </div>
  );
};

export default Login;
