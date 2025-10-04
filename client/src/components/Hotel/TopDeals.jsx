import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import topDeals from "../../assets/Hotel/Top Deals/Top Deals";
import Title from "../Tilte";


const TopDeals = () => {
  return (
     <div className="bg-[#E6E6E6] px-6 py-4">
      {/* Common wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="Top Deals"
        />
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
        {topDeals.map((topDeal) => (
          <SwiperSlide key={topDeal.id} className="pt-4">
            <div className="rounded-lg shadow hover:shadow-lg transition bg-white">
              <div>
                <img
                src={topDeal.image}
                alt={topDeal.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              </div>
              <div className="p-3">
                <span className="text-[10px] bg-[#A6A9A9] px-2 py-1 rounded  inline-block">
                {topDeal.tag}
              </span>
              <h2 className="font-semibold text-sm mt-2">{topDeal.name}</h2>
              <p className="text-sm text-gray-600">{topDeal.city}</p>
              <div className="flex text-center"><p className="text-xs mt-1 px-2 py-1 bg-[#0361C5] rounded-md text-white">
                ⭐ {topDeal.rating} 
              </p>
              <p className="text-sm mt-1 ml-2 pl-2 text-black/80"> Good · {topDeal.reviews} reviews</p></div>
              <div className="flex justify-between mt-2">
                <p className="text-xs">{topDeal.nights} nights</p>
              <div className="flex gap-2">
                <p className="text-xs line-through text-red-500">
                ₹{topDeal.oldPrice}
              </p>
              <p className="text-sm font-bold text-black">
                ₹{topDeal.newPrice}
              </p>
              </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
    </div>

  )
}

export default TopDeals