import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";

const Error = () => {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gray-100 items-center justify-center p-10">
      <div className="flex-1">
        <img src="https://i.ibb.co/Lpg4T3s/error.png" alt="404 img" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
        <p className="my-4">
          We are sorry, but the page you are looking for cannot be found. It
          seems that the page you are trying to access might have been moved,
          deleted, or it could be temporarily unavailable. Please check the URL
          for any typos, or go back to the homepage and try navigating from
          there. If you continue to encounter this issue, feel free to contact
          our support team for assistance. Thank you for your patience
        </p>
        <Link to="/" className="btn bg-sky-300">
          Back to homepage <BsArrowReturnRight />
        </Link>
      </div>
    </div>
  );
};

export default Error;
