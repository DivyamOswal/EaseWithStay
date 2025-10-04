import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import topDeals from "../../assets/Hotel/Top Deals/Top Deals";

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = topDeals.find((item) => item.id.toString() === id);

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  },[])

  if (!hotel) {
    return <h2 className="text-center text-red-500 mt-10">Hotel not found</h2>;
  }

  

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      {/* Back link */}
      <Link to="/hotels" className="text-black hover:underline text-sm">
        ← Back to Top Hotel Page
      </Link>

      {/* Grid Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-lg p-6">
        {/* Left - Hotel Image */}
        <div>
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full  h-250px md:h-[350px] object-cover rounded-lg"
          />
        </div>

        {/* Right - Hotel Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-lg text-gray-600">{hotel.city}</p>

            <div className="mt-2 flex items-center">
              <p className="text-sm bg-[#0361C5] text-white px-3 py-1 rounded-md">
                ⭐ {hotel.rating}
              </p>
              <p className="ml-3 text-gray-700 text-sm">
                {hotel.reviews} reviews
              </p>
            </div>

            <p className="mt-3 text-sm text-gray-700">
              Duration: <span className="font-semibold">{hotel.nights}</span>{" "}
              nights stay
            </p>

            <div className="mt-4 flex gap-6">
              <p className="line-through text-red-500 text-sm">
                ₹{hotel.oldPrice}
              </p>
              <p className="text-xl font-bold text-black">
                ₹{hotel.newPrice}
              </p>
            </div>
            <p className="mt-2">{hotel.description}</p>
          </div>

          {/* CTA Button */}
          <button className="mt-6 w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
