import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Villas from "./pages/Villas";
import Bungalows from "./pages/Bungalows";
import Hostels from "./pages/Hostels";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import HotelDetail from "./components/Hotel/HotelDetailPage";
import topDeals from "./assets/Hotel/Top Deals/Top Deals";
import VillaDetailsPage from "./components/Villa/VillaDetailsPage";
import luxuryVillas from "./assets/Villas/Luxury Villas/luxuryVillas";
import BungalowsDetailsPage from "./components/Bungalows/BungalowsDetailsPage";
import familyFriendly from "./assets/Bungalows/Family Friendly/familyFriendly";

const App = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";
  const hideFooter = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <div className={!hideNavbar ? "pt-13 sm:pt-20 md:pt-16" : ""}>
        <Routes>
          {/*  Home Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/bungalows" element={<Bungalows />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/hotel/:id"
            element={<HotelDetail data={topDeals} backLink="/hotels" />}
          />
          <Route
            path="/villas/:id"
            element={<VillaDetailsPage data={luxuryVillas} backLink="/villas" />}
          />
          <Route
            path="/bungalows/:id"
            element={<BungalowsDetailsPage data={familyFriendly} backLink="/bungalows" />}
            />
          {/* For page not found */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
