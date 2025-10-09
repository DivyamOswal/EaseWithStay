import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Hotels = lazy(() => import("./pages/Hotels"));
const Villas = lazy(() => import("./pages/Villas"));
const Bungalows = lazy(() => import("./pages/Bungalows"));
const Hostels = lazy(() => import("./pages/Hostels"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));

// Lazy load detail pages
const HotelDetail = lazy(() => import("./components/Hotel/HotelDetailPage"));
const VillaDetailsPage = lazy(() => import("./components/Villa/VillaDetailsPage"));
const BungalowsDetailsPage = lazy(() => import("./components/Bungalows/BungalowsDetailsPage"));
const HostelsDetailsPage = lazy(() => import("./components/Hostels/HostelsDetailsPage"));

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
  const hideFooter = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <div className={!hideNavbar ? "pt-13 sm:pt-20 md:pt-16" : ""}>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            {/* Home Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/bungalows" element={<Bungalows />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Detail Pages with Dynamic Data Import */}
            <Route
              path="/hotel/:id"
              element={
                <HotelDetailLoader backLink="/hotels" />
              }
            />
            <Route
              path="/villas/:id"
              element={
                <VillaDetailsLoader backLink="/villas" />
              }
            />
            <Route
              path="/bungalows/:id"
              element={
                <BungalowsDetailsLoader backLink="/bungalows" />
              }
            />
            <Route
              path="/hostels/:id"
              element={
                <HostelsDetailsLoader backLink="/hostels" />
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<h1 className="text-center py-20">404 - Page Not Found</h1>} />
          </Routes>
        </Suspense>
      </div>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;

/* ------------------- Dynamic Data Loaders ------------------- */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Hotel Detail Loader
const HotelDetailLoader = ({ backLink }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    import("./assets/Hotel/Top Deals/Top Deals").then((module) => setData(module.default));
  }, []);

  if (!data) return <div className="text-center py-20">Loading hotel details...</div>;
  return <HotelDetail data={data} backLink={backLink} />;
};

// Villa Detail Loader
const VillaDetailsLoader = ({ backLink }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    import("./assets/Villas/Luxury Villas/luxuryVillas").then((module) => setData(module.default));
  }, []);

  if (!data) return <div className="text-center py-20">Loading villa details...</div>;
  return <VillaDetailsPage data={data} backLink={backLink} />;
};

// Bungalows Detail Loader
const BungalowsDetailsLoader = ({ backLink }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    import("./assets/Bungalows/Family Friendly/familyFriendly").then((module) => setData(module.default));
  }, []);

  if (!data) return <div className="text-center py-20">Loading bungalow details...</div>;
  return <BungalowsDetailsPage data={data} backLink={backLink} />;
};

// Hostels Detail Loader
const HostelsDetailsLoader = ({ backLink }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    import("./assets/Hostels/Budget Friendly/budgetFriendly").then((module) => setData(module.default));
  }, []);

  if (!data) return <div className="text-center py-20">Loading hostel details...</div>;
  return <HostelsDetailsPage data={data} backLink={backLink} />;
};
