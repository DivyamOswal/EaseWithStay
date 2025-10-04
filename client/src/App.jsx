import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Villas from "./pages/Villas";
import Hostels from "./pages/Hostels";
import Bungalows from "./pages/Bungalows";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import HotelDetail from "./components/Hotel/HotelDetailPage";
 

const App = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";
  const hideFooter = location.pathname === "/login";

  return (
    <div>
      {/* Navbar */}
      {!hideNavbar && <Navbar />}
      <div className={!hideNavbar ? "pt-13 sm:pt-20 md:pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/bungalows" element={<Bungalows />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
