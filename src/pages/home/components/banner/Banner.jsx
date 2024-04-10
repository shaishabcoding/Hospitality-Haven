import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { Autoplay, EffectCards } from "swiper/modules";
import getRandomColor from "../../../../utils/getRandomColor";
import { FaLocationArrow } from "react-icons/fa";

const Banner = () => {
  const images = [
    "https://i.ibb.co/zNnhvyh/Luxury-Beach-Resort.png",
    "https://i.ibb.co/cg56RgP/Cozy-Mountain-Lodge.png",
    "https://i.ibb.co/SNWbsGF/Charming-Guesthouse-in-the-Countryside.png",
    "https://i.ibb.co/2cSxLLj/Ski-Chalet-Vacation-Rental.png",
    "https://i.ibb.co/hdM3V6g/Grand-Hotel-Downtown.png",
    "https://i.ibb.co/PZwRd3K/Riverside-Motel.png",
    "https://i.ibb.co/BVFsTcy/Seaside-Vacation-House.png",
    "https://i.ibb.co/wBSf4yW/Mountain-Retreat-Resort.png",
    "https://i.ibb.co/Jr9cnVf/Coastal-Cottage.png",
  ];
  return (
    <div className="hero min-h-screen bg-base-200 lg:rounded-lg lg:my-10 md:py-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:p-28 gap-4 lg:gap-24 overflow-hidden">
        <Swiper
          data-aos="zoom-in"
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="w-[220px] md:w-[500px] lg:w-[300px] drop-shadow-md"
        >
          {images.map((image, idx) => (
            <SwiperSlide
              key={idx}
              style={{ backgroundColor: getRandomColor() }}
              className="p-2 rounded-lg"
            >
              <img
                src={image}
                className="w-full aspect-square md:aspect-video lg:aspect-square rounded-lg drop-shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:px-10">
          <h1
            data-aos="fade-up"
            className="lg:text-5xl mt-4 lg:mt-0 text-2xl font-bold"
          >
            Welcome to <span className="text-sky-600">Hospitality Haven</span>!
          </h1>
          <p data-aos="fade-down" data-aos-delay="300" className="lg:my-6 my-4">
            Discover the epitome of luxury living with our exclusive selection
            of hospitality properties. From serene retreats to opulent estates,
            find your perfect sanctuary amidst breathtaking landscapes and
            unparalleled comfort. Begin your journey to relaxation and
            rejuvenation today.
          </p>
          <button
            data-aos="flip-left"
            data-aos-duration="400"
            className="btn btn-primary"
          >
            Get Started <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
