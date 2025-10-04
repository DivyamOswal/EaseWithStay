import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import Title from "../Title";
import { Link } from "react-router-dom";
import weekendGathaways from "../../assets/Hotel/Weekend Gathaways/weekendGathaways";



const WeekendGathaways = () => {
  return (
     <div className="bg-[#E6E6E6] px-6 py-4">
      {/* Common wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="Weekend Getaways"
        />
        <Swiper className="ml-3"
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
        {weekendGathaways.map((weekendGathaway) => (
          <SwiperSlide key={weekendGathaway.id} className="pt-4">
             {/* Link (naviage to the hotel details page) */}
             <Link to={`/hotel/${weekendGathaway.id}`}>
            <div className="rounded-lg shadow hover:shadow-lg transition bg-white">
              <div>
                <img
                src={weekendGathaway.image}
                alt={weekendGathaway.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              </div>
              <div className="p-3">
                <span className="text-[10px] bg-[#A6A9A9] px-2 py-1 rounded  inline-block">
                {weekendGathaway.tag}
              </span>
              <h2 className="font-semibold text-sm mt-2">{weekendGathaway.name}</h2>
              <p className="text-sm text-gray-600">{weekendGathaway.city}</p>
              <div className="flex text-center"><p className="text-xs mt-1 px-2 py-1 bg-[#0361C5] rounded-md text-white">
                ⭐ {weekendGathaway.rating} 
              </p>
              <p className="text-sm mt-1 ml-2 pl-2 text-black/80"> Good · {weekendGathaway.reviews} reviews</p></div>
              <div className="flex justify-between mt-2">
                <p className="text-xs">{weekendGathaway.nights} nights</p>
              <div className="flex gap-2">
                <p className="text-xs line-through text-red-500">
                ₹{weekendGathaway.oldPrice}
              </p>
              <p className="text-sm font-bold text-black">
                ₹{weekendGathaway.newPrice}
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

export default WeekendGathaways