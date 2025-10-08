import React from 'react'
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import Title from "../Title";
import { Link } from "react-router-dom";
import luxuryVillas from '../../assets/Villas/Luxury Villas/luxuryVillas';

const LuxuryVillas = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
     
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title title="Luxury Villas" /> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={11}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 5 }, // desktop
          }}
        >
          {luxuryVillas.map((luxuryVilla) => (
            <SwiperSlide key={luxuryVilla.id} className="pt-4">
            
              <Link
                to={`/villas/${luxuryVilla.id}`}
                state={{ source: "luxuryVillas" }}
              >
                <div className="rounded-lg shadow hover:shadow-lg transition bg-white">
                  <div>
                    <img
                      src={luxuryVilla.image}
                      alt={luxuryVilla.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] bg-[#A6A9A9] px-2 py-1 rounded inline-block">
                      {luxuryVilla.tag}
                    </span>
                    <h2 className="font-semibold text-sm mt-2">
                      {luxuryVilla.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {luxuryVilla.location}
                    </p>
                    <div className="flex text-center">
                      <p className="text-xs mt-1 px-2 py-1 bg-[#0361C5] rounded-md text-white">
                        ⭐ {luxuryVilla.rating}
                      </p>
                      <p className="text-sm mt-1 ml-2 pl-2 text-black/80">
                        Good · {luxuryVilla.reviews} reviews
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-xs">{luxuryVilla.nights} nights</p>
                      <div className="flex gap-2">
                        <p className="text-xs line-through text-red-500">
                          ₹{luxuryVilla.oldPrice}
                        </p>
                        <p className="text-sm font-bold text-black">
                          ₹{luxuryVilla.newPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default LuxuryVillas