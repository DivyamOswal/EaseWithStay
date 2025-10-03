import React from 'react'
import Title from '../Tilte'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import travelHelpers from '../../assets/travelHelper/travelHelper'

const TravelHelper = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
      {/* Common wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="Your Quick Travel Helper"
          subtitle="Choose your vibe and discover India's best spots"
        />

        {/* Filter Buttons */}
        <div className="p-3 flex flex-wrap gap-3 sm:gap-4 font-medium text-sm sm:text-base md:text-lg ">
          {["Culture", "Luxury", "Family Fun", "Festival", "RoadTrip", "Holidays"].map((item, idx) => (
            <button
              key={idx}
              className={`px-6 py-1 rounded-3xl transition-all duration-300 hover:scale-105 hover:cursor-pointer
                ${idx === 0 
                  ? "bg-[#A6A9A9] text-[#206EBF]" 
                  : "hover:bg-[#D2D5D5]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

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
          {travelHelpers.map((travelHelper, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-[90%] sm:w-full max-w-sm flex flex-col justify-center rounded-xl transition-shadow duration-300">
                
                {/* Top Section (Image) */}
                <div className="w-full h-40">
                  <img
                    src={travelHelper.image}
                    alt={travelHelper.title}
                    className="w-full h-full object-cover rounded-t-xl hover:cursor-pointer"
                  />
                </div>

                {/* Bottom Section Data */}
                <div className="text-left flex flex-col justify-start pt-2 px-2 pb-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{travelHelper.name}</h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                    {travelHelper.distance}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TravelHelper
