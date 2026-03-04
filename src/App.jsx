// src/App.jsx
import { useState } from "react";
import Header      from "./components/layout/Header";
import BottomNav   from "./components/layout/BottomNav";
import FindRide    from "./pages/FindRide";
import RideResults from "./pages/RideResults";
import BookingConfirm from "./pages/BookingConfirm";
import OfferRide   from "./pages/OfferRide";
import MyRides     from "./pages/MyRides";

// Screen flow within the "find" tab:  home → results → confirm
// Other tabs (offer, rides) render their page directly.

export default function App() {
  const [activeTab, setActiveTab] = useState("find");        // find | offer | rides
  const [screen,    setScreen]    = useState("home");        // home | results | confirm
  const [searchParams, setSearchParams] = useState({});
  const [selectedRide, setSelectedRide] = useState(null);

  // ── Handlers ──────────────────────────────────────────
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "find") setScreen("home");  // reset find flow on tab switch
  };

  const handleResults = (params) => {
    setSearchParams(params);
    setScreen("results");
  };

  const handleBookRide = (ride) => {
    setSelectedRide(ride);
    setScreen("confirm");
  };

  const handleBookingConfirmed = () => {
    // After confirmation, send user to My Rides
    setActiveTab("rides");
    setScreen("home");
  };

  // ── Render active content ──────────────────────────────
  const renderContent = () => {
    if (activeTab === "offer") return <OfferRide />;
    if (activeTab === "rides") return <MyRides />;

    // "find" tab — multi-screen flow
    if (screen === "results") {
      return (
        <RideResults
          params={searchParams}
          onBook={handleBookRide}
          onBack={() => setScreen("home")}
        />
      );
    }
    if (screen === "confirm") {
      return (
        <BookingConfirm
          ride={selectedRide}
          onConfirm={handleBookingConfirmed}
          onBack={() => setScreen("results")}
        />
      );
    }
    return <FindRide onResults={handleResults} />;
  };

  return (
    <div className="min-h-screen bg-black font-body relative">
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Top navigation bar */}
      <Header />

      {/* Main content */}
      <main className="max-w-xl mx-auto px-4 py-6 pb-28 relative z-10">
        {renderContent()}
      </main>

      {/* Bottom tab navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
