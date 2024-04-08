import { useContext } from "react";
import AuthContext from "../../contexts/auth/AuthContext";
import Banner from "./components/banner/Banner";

const Home = () => {
  const { isLoading } = useContext(AuthContext);
  console.log(isLoading);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
