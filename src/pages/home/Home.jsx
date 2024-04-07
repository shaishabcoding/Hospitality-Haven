import { useContext } from "react";
import AuthContext from "../../contexts/auth/AuthContext";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
