import React from "react";
import Title from "../Tilte";

const TopChoices = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 py-4">
      {/* Common wrapper for Title + Swiper */}
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        <Title
          title="# Top choice for visitors from India"
        />

        {/* Filter Buttons */}
        <div className="p-3 mt-2 flex flex-wrap gap-3 sm:gap-4 font-medium text-sm sm:text-base md:text-lg ">
          {[
            "Top Pics",
            "Trending",
            "Explore",
            "Book Now",
            "Hot Deals",
            "Offers"
          ].map((item, idx) => (
            <button
              key={idx}
              className={`px-6 py-1 rounded-3xl transition-all duration-300 hover:scale-105 hover:cursor-pointer
                ${
                  idx === 0
                    ? "bg-[#A6A9A9] text-[#206EBF]"
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

export default TopChoices;
