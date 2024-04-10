import PropTypes from "prop-types";
import { useContext, useState } from "react";
import {
  getLocalEstates,
  removeLocalEstate,
} from "../../../../utils/localEstate";
import EstatesContext from "../../../../contexts/estates/EstatesContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
const Estate = ({ mode, sort }) => {
  const [localEstateIds, setLocalEstateIds] = useState(getLocalEstates(mode));
  const estates = useContext(EstatesContext);
  const localEstates = estates.filter((estate) =>
    localEstateIds.includes(estate.id)
  );
  const handleEstateRemove = (id) => () => {
    removeLocalEstate(mode, id);
    setLocalEstateIds(getLocalEstates(mode));
  };
  const sortedEstates = [...localEstates].sort((a, b) =>
    sort === "estate_title" ? a[sort].localeCompare(b[sort]) : b[sort] - a[sort]
  );
  const newEstates = sort ? sortedEstates : localEstates;
  return (
    <div className="flex flex-col gap-4">
      {newEstates.map((estate, idx) => {
        const {
          id,
          estate_title,
          segment_name,
          price,
          area,
          facilities,
          image,
        } = estate;

        return (
          <div
            data-aos={`fade-${idx % 2 ? "up" : "down"}`}
            key={idx}
            className={`border border-gray-300 rounded-lg overflow-hidden flex flex-col ${
              idx % 2 ? "md:flex-row-reverse" : "md:flex-row"
            } lg:gap-6 md:gap-4`}
          >
            <img
              src={image}
              className="md:w-1/2 w-full aspect-video md:object-cover"
            />
            <div
              className={`flex-1 flex flex-col  px-4 md:px-0 ${
                idx % 2 && "md:ml-4"
              }`}
            >
              <h2
                data-aos="zoom-in"
                className="text-xl md:text-2xl font-bold mt-3"
              >
                {estate_title}
              </h2>
              <p data-aos="zoom-in" className="mt-1">
                <b className="font-bold">Price</b>: ${price} |{" "}
                <b className="font-bold">Area</b>: ${area} sq ft
              </p>
              <p data-aos="zoom-in" className="mt-1">
                <b className="font-bold">Segment</b>: {segment_name}
              </p>
              <div data-aos="zoom-in" className="mt-1 flex-grow">
                <h4 className="text-md font-semibold">Facilities</h4>
                <ol className="list-disc ml-8 flex-grow mb-4">
                  {facilities.map((facility, idx) => (
                    <li key={idx}>{facility}</li>
                  ))}
                </ol>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Link
                  data-aos="flip-left"
                  data-aos-duration="600"
                  to={`/estate/${id}`}
                  className="btn btn-info text-white mb-4 md:mr-4 btn-primary"
                >
                  View Property <TbListDetails />
                </Link>
                <div
                  data-aos="flip-left"
                  data-aos-duration="600"
                  className="mb-4 md:mr-4"
                >
                  <button
                    onClick={handleEstateRemove(id)}
                    className="btn btn-error w-full text-white  btn-primary"
                  >
                    Remove <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
Estate.propTypes = {
  mode: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
export default Estate;
