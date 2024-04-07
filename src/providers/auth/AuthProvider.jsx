import PropTypes from "prop-types";
import AuthContext from "../../contexts/auth/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Shaishab",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
