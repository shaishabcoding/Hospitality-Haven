import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/auth/AuthContext";
import { HiOutlineLogout } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

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
            <NavLink to="/estates">Listed Estates</NavLink>
          </li>
          <li>
            <NavLink to="/profile/update">Update Profile</NavLink>
          </li>
          <li className="md:hidden">
            <button
              className="btn btn-xs text-xs p-0 bg-white"
              onClick={logOut}
            >
              Logout <HiOutlineLogout />
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
          <span data-aos="zoom-in-down">Hospitality Haven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul data-aos="zoom-in-left" className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <div
              className="tooltip md:mr-4 tooltip-left lg:tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                data-aos="zoom-in-right"
                src={user?.photoURL}
                className="w-10 lg:w-12 mr-2 lg:mr-0 rounded-full ring-4 ring-sky-500"
              />
            </div>
            <button
              className="btn bg-white hidden md:flex items-center justify-center"
              onClick={logOut}
              data-aos="zoom-out-up"
            >
              Logout <HiOutlineLogout />
            </button>
          </>
        ) : (
          <div data-aos="zoom-in-right">
            <Link to="/login" className="btn bg-white">
              Login <FiLogIn />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
