import { useContext, useState } from "react";
import Estate from "./components/estate/Estate";
import EstatesContext from "../../../../contexts/estates/EstatesContext";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Estates = () => {
  const estates = useContext(EstatesContext);
  const [estatesLen, setEstatesLen] = useState(6);
  return (
    <div className="mx-4 lg:mx-0 mb-4 lg:mb-10">
      <h2
        data-aos="zoom-out-up"
        data-aos-duration="400"
        className="text-2xl lg:text-5xl font-bold text-center my-8 lg:my-16"
      >
        Estates
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6 md:mb-10">
        {estates.slice(0, estatesLen).map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
      <div className="flex justify-center mb-6 lg:mb-16">
        {estatesLen !== estates.length ? (
          <button
            className="btn bg-sky-500 text-white animate-bounce"
            onClick={() => setEstatesLen(estates.length)}
          >
            Show more <AiOutlineArrowDown />
          </button>
        ) : (
          <button
            className="btn bg-sky-500 text-white animate-bounce"
            onClick={() => setEstatesLen(6)}
          >
            Show less <AiOutlineArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Estates;
