import React from "react";
import Title from "../Tilte";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import propertyTypes from "../../assets/Home/browse/browse";

const Browse = () => {
  return (
    <div className="bg-[#E6E6E6] px-4 pt-3">
      {/* Common wrapper for Title + Swiper */}
     <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="Browse By Property Type !"
          subtitle="Find stays that match your style and comfort."
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
          {propertyTypes.map((property, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex flex-col justify-center rounded-xl p-3 sm:p-4 transition-shadow hover:cursor-pointer duration-300">
                {/* Top Section (Image) */}
                <div className="w-full h-40">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover rounded-md rounded-t-xl"
                  />
                </div>
                {/* Bottom Section Data */}
                <div className="text-left flex flex-col justify-start pt-2">
                  <h3 className="font-medium text-lg">{property.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Browse;
