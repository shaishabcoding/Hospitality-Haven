import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, googleSignUp, githubSignUp } = useContext(AuthContext);
  const [isShowPass, setIsShowPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = handleSubmit(({ email, password }) => {
    if (!/[A-Z]/.test(password)) {
      toast.error("Must have an Uppercase letter in the password");
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
    } else {
      logIn({ email, password }, () => {
        toast.success("Account Logged in successfully");
        navigate("/");
      });
    }
  });
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Please Login</h2>
      <form className="grid gap-4" onSubmit={handleFormSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Enter your email"
            required
            {...register("email")}
          />
        </label>
        <div className="join">
          <label className="input input-bordered flex items-center gap-2 join-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={isShowPass ? "text" : "password"}
              className="grow"
              placeholder="Enter your password"
              required
              minLength="6"
              maxLength="20"
              {...register("password")}
            />
          </label>
          <button
            className="btn join-item text-2xl px-2"
            onClick={(e) => {
              e.preventDefault();
              setIsShowPass(!isShowPass);
            }}
          >
            {isShowPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
      </form>
      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link className="btn btn-link p-0" to="/register">
          Register
        </Link>
      </p>
      <div className="divider mt-0">OR</div>
      <button
        className="btn flex items-center gap-2 text-sky-500 hover:text-white hover:bg-sky-500 bg-white rounded-lg border-2 border-sky-500 hover:border-0 w-full mb-4"
        onClick={() => {
          googleSignUp(() => {
            toast.success("Google Sign In successfully");
            navigate("/");
          });
        }}
      >
        <FaGoogle /> Login with Google
      </button>
      <button
        className="btn flex items-center gap-2 text-gray-700 hover:text-white hover:bg-gray-700 bg-white rounded-lg border-2 border-gray-700 hover:border-0 w-full"
        onClick={() => {
          githubSignUp(() => {
            toast.success("Github Sign In successfully");
            navigate("/");
          });
        }}
      >
        <FaGithub /> Login with Github
      </button>
    </div>
  );
};

export default Login;
