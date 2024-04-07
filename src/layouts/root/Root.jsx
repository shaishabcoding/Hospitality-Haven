import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
const Root = () => {
  return (
    <div className="font-source">
      <Navbar></Navbar>
      <h2>This is root</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
