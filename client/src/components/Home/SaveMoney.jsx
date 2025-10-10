import React from "react";
import Title from "../Title";
import geniusImage from "../../assets/genius.png"

const SaveMoney = () => {
  return (
    <div className="bg-[#E6E6E6] px-4 py-6 md:px-6 md:py-2">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <Title title="See more, spend less" />
        </div>

        {/* Content wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center border-2 border-black rounded-xl p-6 gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-lg md:text-xl font-medium">
              Sign in, Save money
            </h1>
            <h3 className="pt-2 text-sm md:text-lg font-mono leading-snug">
              Enjoy 10%+ off at select stays – just spot the blue Genius tag!
            </h3>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5 justify-center md:justify-start">
              <button className="bg-[#0056B3] px-6 py-2 text-white rounded-md hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                Sign In
              </button>
              <button className="text-[#0056B3] bg-gray-300 rounded-md hover:bg-gray-400 px-6 py-2 hover:cursor-pointer">
                Register
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-shrink-0">
            <img
              src={geniusImage}
              alt="Genius Program"
              className="h-32 w-32 md:h-40 md:w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveMoney;
