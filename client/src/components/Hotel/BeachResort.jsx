import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

import Title from "../Title";
import { Link } from "react-router-dom";
import beachResorts from "../../assets/Hotel/Beach Resort/beachResort";

const BeachResort = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title title="Beach Resorts & Sea View Rooms" />
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
          {beachResorts.map((beachResort) => (
            <SwiperSlide key={beachResort.id} className="pt-4">
              {/* Link (navigate to the hotel details page) */}
              <Link
                to={`/hotel/${beachResort.id}`}
                state={{ source: "beachResorts" }} // ✅ pass category name
              >
                <div className="rounded-lg shadow hover:shadow-lg transition bg-white">
                  <div>
                    <img
                      src={beachResort.image}
                      alt={beachResort.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] bg-[#A6A9A9] px-2 py-1 rounded inline-block">
                      {beachResort.tag}
                    </span>
                    <h2 className="font-semibold text-sm mt-2">
                      {beachResort.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {beachResort.location}
                    </p>
                    <div className="flex text-center">
                      <p className="text-xs mt-1 px-2 py-1 bg-[#0361C5] rounded-md text-white">
                        ⭐ {beachResort.rating}
                      </p>
                      <p className="text-sm mt-1 ml-2 pl-2 text-black/80">
                        Good · {beachResort.reviews} reviews
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-xs">{beachResort.nights} nights</p>
                      <div className="flex gap-2">
                        <p className="text-xs line-through text-red-500">
                          ₹{beachResort.oldPrice}
                        </p>
                        <p className="text-sm font-bold text-black">
                          ₹{beachResort.newPrice}
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

export default BeachResort;
