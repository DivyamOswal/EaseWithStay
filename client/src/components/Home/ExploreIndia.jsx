import React from "react";
import Title from "../Tilte";
import cities from "../../assets/Home/explore/exploreIndia";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExploreIndia = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
      {/* Common wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="Explore India !"
          subtitle='"These must-visit destinations offer endless experiences."'
        />

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },   // phones
            640: { slidesPerView: 2 }, // small tablets
            768: { slidesPerView: 4 }, // tablets
            1024: { slidesPerView: 6 } // desktops
          }}
          className="mt-6 overflow-hidden"
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex flex-col justify-center rounded-xl   transition-shadow duration-300">
                
                {/* Top Section (Image) */}
                <div className="w-full h-40">
                  <img
                    src={city.image}
                    alt={city.title}
                    className="w-full h-full object-cover rounded-t-xl hover:cursor-pointer"
                  />
                </div>

                {/* Bottom section data */}
                <div className="text-left flex flex-col justify-start pt-2 px-2 pb-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{city.name}</h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                    {city.properties} Properties
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreIndia;
