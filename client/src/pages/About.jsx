import React, { useEffect } from "react";
import img1 from "../assets/About/img1.avif";
import img2 from "../assets/About/img2.jpg";
import img3 from "../assets/About/img3.jpg";

const About = () => {

  useEffect(()=>{
      window.scrollTo({top:0, behavior:"smooth"})
    },[])
  return (
    <section className="bg-[#E6E6E6] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800">
          About Us
        </h1>

        <p className="text-center text-gray-700 mt-3 text-base md:text-lg leading-relaxed">
          “Travel made simple, stays made special.” <br />
          At <span className="font-semibold text-[#222]">EaseWithStay</span>, we
          bring you curated stays from cozy hostels to luxury villas across
          India’s most loved destinations.
        </p>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
          <img
            src={img1}
            alt="EaseWithStay"
            className="h-[300px] md:h-[350px] w-full md:w-[500px] rounded-xl object-cover shadow-md"
          />

          <div className="flex-1 text-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              Every stay, a story worth remembering.
            </h3>
            <p className="text-base leading-relaxed">
              At EaseWithStay, we believe that your journey deserves more than
              just a place to rest it deserves a memory. From solo backpackers
              and family travelers to luxury seekers, we offer stays that fit
              every vibe, budget, and destination.
              <br />
              <br />
              Whether you’re exploring the hills, beaches, or city escapes, our
              platform connects you with authentic, verified, and unique stays
              that make travel truly effortless.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
          <div className="flex-1 text-gray-800">
            <h3 className="text-xl font-semibold mb-3">What we Offer?</h3>
            <p className="text-base leading-relaxed">
              🏨<span className="font-semibold"> Hotels</span> : Comfort,
              convenience, and style wherever you go.
            </p>
            <p className="text-base leading-relaxed">
              🏠<span className="font-semibold"> Villas</span> : Private luxury
              for families and groups
            </p>
            <p className="text-base leading-relaxed">
              🏕️<span className="font-semibold"> Bungalows</span> :Peaceful
              escapes surrounded by nature
            </p>
            <p className="text-base leading-relaxed">
              🏨<span className="font-semibold"> Hostels</span> :Vibrant stays for social travelers
            </p>
          </div>
          <img
            src={img2}
            alt="EaseWithStay"
            className="h-[300px] md:h-[350px] w-full md:w-[500px] rounded-xl object-cover shadow-md"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
          <img
            src={img3}
            alt="EaseWithStay"
            className="h-[300px] md:h-[350px] w-full md:w-[500px] rounded-xl object-cover shadow-md"
          />
          <div className="flex-1 text-gray-800">
            
            <h3 className="text-xl font-semibold mb-3">Why choose us?</h3>
            <p className="text-base leading-relaxed">
              •  Verified stays handpicked for quality
            </p>
            <p className="text-base leading-relaxed">
             •  Transparent pricing  no hidden fees
            </p>
            <p className="text-base leading-relaxed">
              • Fast & secure booking process
            </p>
            <p className="text-base leading-relaxed">
              • 24×7 customer support to make your trip stress-free
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
