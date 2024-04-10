import { useContext } from "react";
import Estate from "./components/estate/Estate";
import EstatesContext from "../../../../contexts/estates/EstatesContext";

const Estates = () => {
  const estates = useContext(EstatesContext);

  // console.log(estates);

  return (
    <div className="mx-4 lg:mx-0 mb-4 lg:mb-10">
      <h2
        data-aos="zoom-out-up"
        data-aos-duration="400"
        className="text-2xl lg:text-5xl font-bold text-center my-8 lg:my-16"
      >
        Estates
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
