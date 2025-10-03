import React from "react";
import Title from "../Tilte";
import summerGathways from "../../assets/summerGathway/summerGathway";

const SummerGathway = () => {
  return (
    <div className="bg-[#E6E6E6] px-6 md:py-2">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Title at same level */}
        <div className="flex items-center justify-between mb-6">
          <Title title="Find ideas for your next summer getaway!" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {summerGathways.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden ${
                item.id === 1 ? "md:row-span-2 h-60 md:h-full" : "h-48 md:h-40"
              }`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:cursor-pointer"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 cursor-pointer">
              <h2 className="text-white font-medium text-base md:text-lg leading-snug">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-gray-200 text-xs md:text-sm mt-1">
                    {item.description}
                </p>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerGathway;
