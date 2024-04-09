import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Estate = ({ estate }) => {
  const [isFav, setIsFav] = useState(false);
  const { estate_title, segment_name, price, status, area, facilities, image } =
    estate;
  const handleFav = () => {
    setIsFav(!isFav);
  };
  return (
    <div className="bg-gray-50/40 rounded-lg p-4 border border-gray-200 group flex flex-col">
      <div className="relative text-white overflow-hidden rounded-lg">
        <img
          src={image}
          className="aspect-video object-cover saturate-50 group-hover:saturate-100 transition group-hover:scale-125"
        />
        <div className="absolute right-3 top-3">
          <span className="bg-sky-500 border border-sky-600 p-1 px-2 text-xs rounded-lg mr-2">
            {segment_name}
          </span>
          <span className="bg-green-500 border border-green-600 p-1 px-2 text-xs rounded-lg">
            {status}
          </span>
        </div>
        <div className="absolute w-full flex justify-between bottom-0 left-0 bg-gray-700/50 px-3 py-1">
          <span>${price}</span>
          <button
            className="btn btn-ghost btn-xs text-base"
            onClick={handleFav}
          >
            {isFav ? <FaHeart className="text-red-400" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
      <h2 className="font-bold text-xl mt-3">{estate_title}</h2>
      <p className="mt-1">
        <b className="font-bold">Area</b>: {area} sq ft
      </p>
      <div className="divider mb-0 mt-2"></div>
      <h4 className="text-lg font-semibold">Facilities</h4>
      <ol className="list-disc ml-8 flex-grow mb-4">
        {facilities.map((facility, idx) => (
          <li key={idx}>{facility}</li>
        ))}
      </ol>
      <button className="btn btn-primary w-full">View Property</button>
    </div>
  );
};
Estate.propTypes = {
  estate: PropTypes.object.isRequired,
};
export default Estate;
