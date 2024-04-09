import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EstatesContext from "../../contexts/estates/EstatesContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const EstateDetails = () => {
  const [isFav, setIsFav] = useState(false);

  const estates = useContext(EstatesContext);
  const { id } = useParams();
  const handleFav = () => {
    setIsFav(!isFav);
  };

  const {
    estate_title,
    segment_name,
    price,
    status,
    area,
    facilities,
    image,
    location,
    description,
  } = estates.find((estate) => estate.id === +id);

  const position = [location.latitude, location.longitude];
  return (
    <div className="mx-4 lg:mx-0 mb-4 lg:mb-10">
      <h2 className="text-2xl lg:text-5xl font-bold text-center my-8 lg:my-16">
        Estate Details
      </h2>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="bg-gray-50/40 rounded-lg p-4 border border-gray-200 group flex flex-col flex-1">
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
          <p className="mt-1">{description}</p>
          <p className="mt-1">
            <b className="font-bold">Area</b>: {area} sq ft
          </p>
          <p className="mt-1">
            <b className="font-bold">Price</b>: ${price}
          </p>
          <div className="divider mb-0 mt-2"></div>
          <h4 className="text-lg font-semibold">Facilities</h4>
          <ol className="list-disc ml-8 flex-grow mb-4">
            {facilities.map((facility, idx) => (
              <li key={idx}>{facility}</li>
            ))}
          </ol>
          {status === "rent" ? (
            <Link to={`/estate/${id}`} className="btn btn-primary w-full">
              Book
            </Link>
          ) : (
            <Link to={`/estate/${id}`} className="btn btn-primary w-full">
              Buy
            </Link>
          )}
        </div>
        <div className="rounded-lg overflow-hidden flex-1">
          <MapContainer
            className="w-full h-52 lg:h-full scale-125"
            center={position}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{estate_title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
