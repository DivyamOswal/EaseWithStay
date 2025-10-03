import React, { useEffect, useState } from "react";

const BottomAnimation = () => {

    const words = ["bungalows", "hotels", "resorts", "villas"]
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % words.length)
        },3000)
        return()=> clearInterval(interval)
    },[])
  return (
    <div className="bg-[#E6E6E6] px-4 py-6 md:px-6 md:py-3">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Content wrapper */}
        <div className="flex flex-col md:flex-row relative justify-between items-center border-2 border-black rounded-xl p-6 gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left flex-1 z-10">
            <h1 className=" text-lg sm:text-2xl md:text-3xl lg:text-3xl font-medium">
              Discover stunning <span key={index} className="border-b-4 border-yellow-400">{words[index]}</span> for your next relaxing getaway.
            </h1>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5 justify-center md:justify-start">
              <button className="bg-[#0056B3] text-white md:px-32 py-2 mt-2 md hover:scale-[1.02] transition-all duration-500 hover:cursor-pointer rounded-md">
                Discover Homes
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-shrink-0 relative z-0">
            <img
              src="/src/assets/bottomAnimation.png"
              alt="Genius Program"
              className="h-32 w-32 md:h-40 md:w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomAnimation;
