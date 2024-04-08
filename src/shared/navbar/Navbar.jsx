import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/auth/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile/update">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="md:hidden">
            <button
              className="btn btn-xs text-xs p-0 bg-white"
              onClick={logOut}
            >
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-200 lg:rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost md:text-xl">
          Hospitality Haven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <div
              className="tooltip md:mr-4 tooltip-left lg:tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                src={user?.photoURL}
                className="w-10 lg:w-12 mr-2 lg:mr-0 rounded-full ring-4 ring-sky-500"
              />
            </div>
            <button
              className="btn bg-white hidden md:inline-block"
              onClick={logOut}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn bg-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
