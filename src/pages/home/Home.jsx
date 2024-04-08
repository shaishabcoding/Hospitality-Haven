import { useContext } from "react";
import EstatesContext from "../../contexts/estates/EstatesContext";
import Banner from "./components/banner/Banner";

const Home = () => {
  const data = useContext(EstatesContext);
  console.log(data);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
