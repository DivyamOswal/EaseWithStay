import React from "react";

const BunglowsWelcome = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 sm:px-8 md:py-8">
      <div className="max-w-[1200px] w-full mx-auto overflow-hidden">
        {/* Section Title */}
        <h3 className="font-semibold text-medium pt-3 md:p-0 md:text-2xl">
          Welcome to EaseWithStay.com
        </h3>
        <p className="font-medium text-sm md:text-base leading-relaxed mt-2 text-gray-700">
          Escape to tranquility with our handpicked bungalows where comfort
          meets nature. Enjoy seamless booking and stays designed for
          relaxation, togetherness, and peace of mind.
          <br />
          Whether it’s a weekend getaway, a family vacation, or a quiet retreat,
          we’ve got the perfect bungalow waiting for you.
        </p>

        {/* Filter Buttons */}
        <div className="pt-4 flex flex-wrap gap-3 sm:gap-3 font-semibold text-[12px] sm:text-[12px] md:text-base sm:text-base  ">
          {[
            "Book Bungalow",
            "Find Bungalows",
            "Exclusive Offers",
            "Explore Retreats",
            "Cozy Rooms",
            "Instant Booking",
          ].map((item, idx) => (
            <button
              key={idx}
              className={`ml-2 px-5 py-1 rounded-3xl transition-all duration-300  hover:cursor-pointer
                ${
                  idx === 0
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

export default BunglowsWelcome;
