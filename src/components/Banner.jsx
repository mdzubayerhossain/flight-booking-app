import React, { useState } from "react";
import { FaSearch, FaRegCircle, FaExchangeAlt, FaUsers } from "react-icons/fa";
import BannerImage from "../assets/banner.png"

const Banner = () => {
  const [roundTrip, setRoundTrip] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [fromLocation, setFromLocation] = useState("Dhaka");
  const [toLocation, setToLocation] = useState("Singapore");
  const [loading, setLoading] = useState(false);
  const [flightPrice, setFlightPrice] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showTravelersMenu, setShowTravelersMenu] = useState(false);

  // Example city data for search suggestions
  const cities = [
    "Dhaka", "Singapore", "New York", "London", "Paris", "Tokyo", "Bangkok", "Sydney", "Dubai", "Los Angeles"
  ];

  const style = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    backgroundAttachment: "fixed",
  };

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "from") {
      setFromLocation(value);
    } else {
      setToLocation(value);
    }
    const filteredCities = cities.filter(city => 
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCities);
  };

  const handleSuggestionSelect = (suggestion, type) => {
    if (type === "from") {
      setFromLocation(suggestion);
    } else {
      setToLocation(suggestion);
    }
    setSuggestions([]);
  };

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleTravelersChange = (increment) => {
    setTravelers(prev => Math.max(1, Math.min(9, prev + increment)));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const basePrice = 300;
      let predictedPrice = basePrice;

      if (fromLocation === "Dhaka" && toLocation === "Singapore") {
        predictedPrice = roundTrip ? 650 : 350;
      } else if (fromLocation === "New York" && toLocation === "London") {
        predictedPrice = roundTrip ? 800 : 400;
      } else if (fromLocation === "Tokyo" && toLocation === "Bangkok") {
        predictedPrice = roundTrip ? 500 : 250;
      }

      setFlightPrice(predictedPrice);
      setSearchResults([fromLocation, toLocation]);
    } catch (error) {
      console.error("Error fetching flight prices:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={style} className="relative flex items-center justify-center px-4 py-20 md:py-32">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8">
          Welcome to <span className="text-[#006CE4]">AirBook</span>
        </h2>

        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl">
          {/* Trip Type & Travelers Selection */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="flex gap-3">
              <button
                onClick={() => setRoundTrip(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  !roundTrip ? "bg-[#006CE4] text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaRegCircle size={16} />
                <span className="font-medium">One Way</span>
              </button>
              <button
                onClick={() => setRoundTrip(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  roundTrip ? "bg-[#006CE4] text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                <FaRegCircle size={16} />
                <span className="font-medium">Round Trip</span>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowTravelersMenu(!showTravelersMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-[#EBF0F5] text-[#006CE4] rounded-lg"
              >
                <FaUsers size={16} />
                <span className="font-medium">{travelers} Traveler(s)</span>
              </button>

              {showTravelersMenu && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-20">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium">Travelers</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleTravelersChange(-1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{travelers}</span>
                      <button
                        onClick={() => handleTravelersChange(1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-end">
            <div className="relative md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => handleInputChange(e, "from")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006CE4] focus:border-transparent"
                placeholder="Departure City"
              />
              {suggestions.length > 0 && fromLocation && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionSelect(suggestion, "from")}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center md:col-span-1">
              <button
                onClick={swapLocations}
                className="p-3 bg-[#EBF0F5] rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaExchangeAlt className="text-[#006CE4]" />
              </button>
            </div>

            <div className="relative md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => handleInputChange(e, "to")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006CE4] focus:border-transparent"
                placeholder="Arrival City"
              />
              {suggestions.length > 0 && toLocation && (
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionSelect(suggestion, "to")}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-7">
              <button
                onClick={handleSearch}
                className="w-full bg-[#FFB700] hover:bg-[#ffa600] text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span>Searching...</span>
                ) : (
                  <>
                    <FaSearch />
                    <span>Search Flights</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && !loading && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                {fromLocation} → {toLocation}
              </h3>
              <p className="mt-2 text-2xl font-bold text-[#006CE4]">
                ${flightPrice}
                <span className="text-sm font-normal text-gray-600">
                  {roundTrip ? " (Round Trip)" : " (One Way)"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;