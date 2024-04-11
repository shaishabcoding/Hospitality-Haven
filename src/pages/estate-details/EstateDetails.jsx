import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import EstatesContext from "../../contexts/estates/EstatesContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaCartArrowDown,
  FaHeart,
  FaMapMarkerAlt,
  FaRegHeart,
} from "react-icons/fa";
import {
  addLocalEstate,
  hasLocalEstate,
  removeLocalEstate,
} from "../../utils/localEstate";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import getRandomColor from "../../utils/getRandomColor";

const EstateDetails = () => {
  const { id } = useParams();
  const [isFav, setIsFav] = useState(hasLocalEstate("fav", id));
  const [color, setColor] = useState(getRandomColor());
  setTimeout(() => setColor(getRandomColor()), 2000);
  const estates = useContext(EstatesContext);

  const handleFav = () => {
    !isFav ? addLocalEstate("fav", id) : removeLocalEstate("fav", id);
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
      <Helmet>
        <title>Estate Details</title>
      </Helmet>
      <h2
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="text-2xl lg:text-5xl font-bold text-center my-8 lg:my-16"
      >
        Estate Details
      </h2>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div
          data-aos="zoom-in-up"
          className="bg-gray-50/40 rounded-lg p-4 border border-gray-200 group flex flex-col lg:flex-col md:flex-row flex-1 md:gap-4 lg:gap-0"
        >
          <div
            data-aos="flip-down"
            className="relative text-white overflow-hidden rounded-lg flex-1"
          >
            <img
              src={image}
              className="aspect-video w-full object-cover group-hover:saturate-100 transition group-hover:scale-125 md:h-full"
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
          <div className="flex-1">
            <h2
              data-aos="zoom-in"
              className="font-bold text-xl lg:text-2xl mt-3"
            >
              {estate_title}
            </h2>
            <p data-aos="zoom-in" className="mt-1">
              {description}
            </p>
            <div data-aos="zoom-in">
              <p className="mt-1">
                <b className="font-bold">Price</b>: ${price} |{" "}
                <b className="font-bold">Area</b>: ${area} sq ft
              </p>
              <p className="mt-1">
                <b className="font-bold">Segment</b>: {segment_name}
              </p>
            </div>
            <div data-aos="flip-right" className="divider mb-0 mt-2"></div>
            <div data-aos="zoom-in">
              <h4 className="text-lg font-semibold">Facilities</h4>
              <ol className="list-disc ml-8 flex-grow mb-4">
                {facilities.map((facility, idx) => (
                  <li key={idx}>{facility}</li>
                ))}
              </ol>
            </div>
            {status === "rent" ? (
              <button
                data-aos="flip-left"
                data-aos-duration="800"
                onClick={() => {
                  addLocalEstate("booked", id);
                  toast.success("Booking Successfully");
                }}
                className="btn btn-primary w-full"
              >
                Book <FaCartShopping />
              </button>
            ) : (
              <button
                data-aos="flip-left"
                data-aos-duration="800"
                onClick={() => {
                  addLocalEstate("buy", id);
                  toast.success("Buy Successfully");
                }}
                className="btn btn-primary w-full"
              >
                Buy <FaCartArrowDown />
              </button>
            )}
          </div>
        </div>
        <div data-aos="flip-up" className="rounded-lg overflow-hidden flex-1">
          <MapContainer
            className="w-full h-52 md:h-96 lg:h-full scale-y-125 md:scale-y-105 md:translate-y-4 translate-y-8 rounded-lg"
            center={position}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              icon={divIcon({
                html: renderToStaticMarkup(
                  <div className="-translate-x-2 relative left-[-2px] -translate-y-6 text-3xl">
                    <div className="animate-bounce drop-shadow-lg transition">
                      <FaMapMarkerAlt style={{ color }} />
                    </div>
                  </div>
                ),
              })}
              position={position}
            >
              <Popup>{estate_title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
