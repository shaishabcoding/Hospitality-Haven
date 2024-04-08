import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import { useLoaderData } from "react-router-dom";
import EstatesContext from "../../contexts/estates/EstatesContext";
const Root = () => {
  const data = useLoaderData();
  return (
    <EstatesContext.Provider value={data}>
      <div className="font-source">
        <div className="lg:mx-28 lg:mt-6">
          <Navbar></Navbar>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </EstatesContext.Provider>
  );
};

export default Root;
