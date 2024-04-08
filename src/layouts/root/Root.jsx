import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
const Root = () => {
  return (
    <div className="font-source">
      <div className="lg:mx-28 lg:mt-6">
        <Navbar></Navbar>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
