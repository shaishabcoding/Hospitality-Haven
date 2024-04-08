import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./banner.css";

import { Autoplay, EffectCards } from "swiper/modules";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:rounded-lg lg:my-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:p-28 gap-4 lg:gap-28">
        <Swiper
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold">
            Welcome to <span className="text-sky-600">Hospitality Haven</span>!
          </h1>
          <p className="lg:my-6 my-4">
            Discover the epitome of luxury living with our exclusive selection
            of hospitality properties. From serene retreats to opulent estates,
            find your perfect sanctuary amidst breathtaking landscapes and
            unparalleled comfort. Begin your journey to relaxation and
            rejuvenation today.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
