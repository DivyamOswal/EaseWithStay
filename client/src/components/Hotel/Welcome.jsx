import React from "react";

const Welcome = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 sm:px-8 md:py-8">
      {/* Wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        {/* Section Title */}
        <h3 className="font-semibold text-medium pt-3 md:p-0 md:text-2xl">Welcome to EaseWithStay.com</h3>
       <p className="font-medium text-sm md:text-base leading-relaxed mt-2 text-gray-700">

          Your perfect stay is just a click away. Explore handpicked hotels,
          enjoy seamless booking, and experience comfort like never before.<br/>
          Whether it's a weekend getaway, a business trip, or a dream vacation —
          we've got the perfect place for you.
        </p>
        {/* Filter Buttons */}
        <div className="pt-4 flex flex-wrap gap-3 sm:gap-4 font-semibold text-[12px] sm:text-[12px] md:text-base sm:text-base  ">
          {["Book Now", "Find Hotels", "Hotel Deals", "Explore Stays", "Rooms", "Quick Book"].map((item, idx) => (
            <button
              key={idx}
              className={`ml-2 px-5 py-1 rounded-3xl transition-all duration-300  hover:cursor-pointer
                ${idx === 0 
                  ? "bg-[#A6A9A9] text-[#206EBF] border-1 border-black" 
                  : "hover:bg-[#D2D5D5]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
