import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../contexts/auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="m-6 text-center flex items-center justify-center gap-2">
        <span className="loading loading-infinity loading-lg"></span> loading
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
