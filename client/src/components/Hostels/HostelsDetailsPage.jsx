import React from 'react'
import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import budgetFriendlys from '../../assets/Hostels/Budget Friendly/budgetFriendly';
import backpackersChoices from '../../assets/Hostels/Backpacker’s Choice/backpackerChoice';
import lastMinuteDeals from '../../assets/Hostels/Last Minute Deals/lastMinuteDeals';
import soloTravellers from '../../assets/Hostels/Solo Travelers/soloTraveler';

const HostelsDetailsPage = () => {
    const { id } = useParams();
      const location = useLocation();
      const navigate = useNavigate();

       const source = location.state?.source;
  const data =
    source ===  "budgetFriendly"? budgetFriendlys: source ===  "backpackerChoice"? backpackersChoices: source === "lastMinuteDeal"?lastMinuteDeals: source === "soloTraveler"?soloTravellers
      : null;
      const hostel = data.find((item) => String(item.id) === String(id));

      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);
      
        if (!hostel)
          return (
            <h2 className="text-center text-gray-600 mt-20 text-lg font-medium">
              Hostels not found
            </h2>
          );
      
        const handleBack = () => {
          if (window.history.length > 2) navigate(-1);
          else navigate("/");
        };
  return (
    <div className="min-h-[80vh] bg-[#F3F4F6] py-10 px-6 flex justify-center">
      <div className="bg-white rounded-xl shadow-md max-w-[1100px] w-full p-6 md:p-10">
        <button
          onClick={handleBack}
          className="text-black text-sm mb-4 hover:bg-[#0361C5]/30 p-2 rounded-xl hover:underline transition-all duration-100"
        >
          ← Back to{" "}
          {source === "weekend" ? "Weekend Getaways" : "Top hostel Page"}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={hostel.image}
            alt={hostel.name}
            className="w-full h-[300px] md:h-[350px] object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {hostel.name}
              </h1>
              <p className="text-gray-600">{hostel.location}</p>

              <div className="flex items-center mt-3 text-sm">
                <span className="bg-[#0056B3] text-white px-2 py-1 rounded-md text-sm font-semibold">
                  ⭐ {hostel.rating}
                </span>
                <span className="ml-3 text-gray-600">
                  {hostel.reviews} reviews
                </span>
              </div>

              <p className="mt-3 text-gray-600 text-sm">
                Duration: {hostel.nights} nights stay
              </p>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-red-500 line-through">₹{hostel.oldPrice}</p>
                <p className="text-xl font-bold">₹{hostel.newPrice}</p>
              </div>

              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                {hostel.description ||
                  "An icon of grandeur, offering world-class comfort, award-winning dining, and a luxurious spa experience."}
              </p>
            </div>
            <button className="mt-6 bg-[#0056B3] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostelsDetailsPage