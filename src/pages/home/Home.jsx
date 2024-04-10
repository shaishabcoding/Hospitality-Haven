import { Helmet } from "react-helmet-async";
import Banner from "./components/banner/Banner";
import Estates from "./components/estates/Estates";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Hospitality Haven | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estates></Estates>
    </div>
  );
};

export default Home;
