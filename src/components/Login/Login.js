const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100 ">
      <h1 className="font-semibold text-5xl text-center leading-tight">
        Login to Your Account
      </h1>
      <h6 className="text-xl mt-4">Login using social networks</h6>
      <div className="flex mt-6">
        <svg
          className="w-8 h-8 cursor-pointer "
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
        <svg
          className="h-8 w-8 ml-8 fill-fbFillColor cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </svg>
      </div>
      <hr className=" w-9/12 mt-4 border-emerald-200 lg:w-4/12" />
      <form className="flex flex-col w-full mx-auto items-center mt-8 md:w-8/12 lg:w-8/12 xl:w-6/12">
        <input
          className="border-2 w-10/12 h-12 lg:w-6/12 pl-2 placeholder:text-lg"
          type="email"
          placeholder="Email"
        />
        <input
          onFocus={() => {
            console.log("hey");
          }}
          onMouseOut={() => console.log("good bye")}
          className="border-2 w-10/12 h-12 mt-2 lg:w-6/12 pl-2 placeholder:text-lg"
          type="password"
          placeholder="Password"
        />
        <button className="bg-mainGreen mt-4 w-7/12 h-12 lg:w-4/12 text-white font-bold">
          Sign In
        </button>
      </form>
      <div className="mt-12">
        <h4>
          Don't have an account?
          <span className="underline cursor-pointer pl-1">Sign up here</span>.
        </h4>
        <h4 className="mt-2 underline cursor-pointer">
          Sign in as a Demo User
        </h4>
      </div>
    </div>
  );
};

export default Login;
