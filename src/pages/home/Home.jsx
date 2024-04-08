import { useContext } from "react";
import AuthContext from "../../contexts/auth/AuthContext";

const Home = () => {
  const { isLoading } = useContext(AuthContext);
  console.log(isLoading);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
