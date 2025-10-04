import CompanyLogos from "../assets/companyLogos/componanyLogos";
import icons from "../assets/Icons/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E5E5E5] text-black px-6 py-8 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl font-bold">EaseWithStay.com</h2>
          <p className="text-sm mt-2">
            Your one-stop solution for hotels, villas, and more.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.image}
                  alt={`social-icon-${index}`}
                  className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1">
              <li><Link to="/hotels" className="hover:underline hover:text-blue-600">Hotels</Link></li>
              <li><Link to="/villas" className="hover:underline hover:text-blue-600">Villas</Link></li>
              <li><Link to="/bungalows" className="hover:underline hover:text-blue-600">Bungalows</Link></li>
              <li><Link to="/hostels" className="hover:underline hover:text-blue-600">Hostels</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:underline hover:text-blue-600">About</Link></li>
              <li><Link to="/contact" className="hover:underline hover:text-blue-600">Contact</Link></li>
              <li><Link to="/login" className="hover:underline hover:text-blue-600">Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Socials</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline hover:text-blue-600">Instagram</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-600">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
    
    </footer>
     <div className="border-t border-black/30 pt-4 pb-6 text-center text-xs sm:text-sm bg-[#D4D0D0]">
  {/* Company Info */}
  <p className="px-4 sm:px-0">
    EaseWithStay.com is part of EaseWithStay Holdings Inc., the world leader in
    online travel and related services.
  </p>

  {/* Copyright */}
  <p className="mt-2 px-4 sm:px-0">
    Copyright © 1996–{new Date().getFullYear()} EaseWithStay.com™. All rights
    reserved.
  </p>

  {/* Company Logos */}
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
    {CompanyLogos.map((companyLogo, index) => (
      <a
        key={index}
        href={companyLogo.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={companyLogo.image}
          alt={companyLogo.name || `company-logo-${index}`}
          className="h-4 sm:h-5 md:h-6 w-20 cursor-pointer hover:opacity-70 transition object-contain"
        />
      </a>
    ))}
  </div>
</div>

    </div>
  );
};

export default Footer;
