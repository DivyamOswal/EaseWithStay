import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Title from "../Title";
import weekendGathaways from "../../assets/Hotel/Weekend Gathaways/weekendGathaways";

const WeekendGathaways = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title title="Weekend Getaways" />

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={11}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 }, 
          }}
        >
          {weekendGathaways.map((deal) => (
            <SwiperSlide key={deal.id} className="pt-4">
            
              <Link to={`/hotel/${deal.id}`} state={{ source: "weekend" }}>
                <div className="rounded-lg shadow hover:shadow-lg transition bg-white">
                  <div>
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] bg-[#A6A9A9] px-2 py-1 rounded inline-block">
                      {deal.tag}
                    </span>
                    <h2 className="font-semibold text-sm mt-2">{deal.name}</h2>
                    <p className="text-sm text-gray-600">{deal.location}</p>

                    <div className="flex text-center items-center">
                      <p className="text-xs mt-1 px-2 py-1 bg-[#0361C5] rounded-md text-white">
                        ⭐ {deal.rating}
                      </p>
                      <p className="text-sm mt-1 ml-2 text-black/80">
                        Good · {deal.reviews} reviews
                      </p>
                    </div>

                    <div className="flex justify-between mt-2 items-center">
                      <p className="text-xs">{deal.nights} nights</p>
                      <div className="flex gap-2 items-center">
                        <p className="text-xs line-through text-red-500">
                          ₹{deal.oldPrice}
                        </p>
                        <p className="text-sm font-bold text-black">
                          ₹{deal.newPrice}
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
  );
};

export default WeekendGathaways;
