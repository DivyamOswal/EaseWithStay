import React from 'react'
import Title from '../Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import weekendOffers from '../../assets/Home/weekendOffers/weekendOffer'

const WeekendOffers = () => {
  return (
     <div className="bg-[#E6E6E6] px-6 sm:px-8 md:py-8">
      {/* Wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">

        {/* Section Title */}
        <Title
          title="Weekend Offers You Can’t Miss"
          subtitle="Save on stays from 10 June - 17 June"
        />

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },    // phones
            768: { slidesPerView: 1 },  // tablets
            1024: { slidesPerView: 2 }, // desktops
          }}
          className="mt-6 overflow-hidden"
        >
          {weekendOffers.map((weekendOffer) => (
            <SwiperSlide key={weekendOffer.id}>
              <div className="w-full h-full flex justify-between items-center bg-white border rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                
                {/* Left Section (Text) */}
                <div className="flex-1 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold">{weekendOffer.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    {weekendOffer.description}
                  </p>
                  <button className="mt-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base bg-[#0056B3] text-white rounded-lg font-semibold hover:bg-blue-700 transition hover:cursor-pointer">
                    {weekendOffer.offer}
                  </button>
                </div>

                {/* Right Section (Image) */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={weekendOffer.image}
                    alt={weekendOffer.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WeekendOffers