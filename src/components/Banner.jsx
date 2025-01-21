import React, { useState } from "react";
import BannerImage from "../assets/banner.png";
import { FaSearch, FaRegCircle } from "react-icons/fa";

// Example city data for search suggestions
const cities = [
  "Dhaka", "Singapore", "New York", "London", "Paris", "Tokyo", "Bangkok", "Sydney", "Dubai", "Los Angeles"
];

const Banner = () => {
  const [roundTrip, setRoundTrip] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [fromLocation, setFromLocation] = useState("Dhaka");
  const [toLocation, setToLocation] = useState("Singapore");
  const [loading, setLoading] = useState(false);
  const [flightPrice, setFlightPrice] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  
  const style = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    width: "99vw",
    backgroundAttachment: "fixed",
    overflow: "hidden",
  };

  // Filter cities based on user input for suggestions
  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "from") {
      setFromLocation(value);
    } else {
      setToLocation(value);
    }

    // Filter cities that match the input
    const filteredCities = cities.filter((city) => city.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filteredCities);
  };

  // Hide suggestions when a suggestion is selected
  const handleSuggestionSelect = (suggestion, type) => {
    if (type === "from") {
      setFromLocation(suggestion);
    } else {
      setToLocation(suggestion);
    }
    setSuggestions([]); // Hide suggestions after selection
  };

  // Simulate fetching flight prices and predict prices based on round trip
  const fetchFlightPrices = async () => {
    const basePrice = 300;

    let predictedPrice = basePrice;

    if (fromLocation === "Dhaka" && toLocation === "Singapore") {
      predictedPrice = roundTrip ? 650 : 350;
    } else if (fromLocation === "New York" && toLocation === "London") {
      predictedPrice = roundTrip ? 800 : 400;
    } else if (fromLocation === "Tokyo" && toLocation === "Bangkok") {
      predictedPrice = roundTrip ? 500 : 250;
    }

    return predictedPrice;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const price = await fetchFlightPrices();
      setFlightPrice(price);
      setSearchResults([fromLocation, toLocation]);
    } catch (error) {
      console.error("Error fetching flight prices:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={style} className="overflow-hidden">
      <div className="pt-52 pl-60">
        <h2 className="text-[40px] text-white font-medium">
          Welcome to <span className="text-[#006CE4]">AirBook</span>
        </h2>
        <div className="bg-white mt-5 p-20 w-5/6 rounded-lg">
          <div className="flex items-center justify-between">
            {/* One Way / Round Trip */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setRoundTrip(false)}
                className={`bg-gray-200 flex items-center gap-2 px-4 py-1.5 rounded-lg ${
                  !roundTrip ? "bg-[#006CE4] text-white" : "text-gray-700"
                }`}
              >
                <FaRegCircle color="gray" />
                <h2 className="text-sm font-medium">One Way</h2>
              </button>
              <button
                onClick={() => setRoundTrip(true)}
                className={`bg-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg text-white ${
                  roundTrip ? "bg-[#006CE4] text-white" : "text-gray-700"
                }`}
              >
                <div className="size-[16px] m-1 rounded-full bg-gray-200"></div>
                <h2 className="text-sm font-medium">Round Trip</h2>
              </button>
            </div>

            {/* Traveler and Class */}
            <div className="flex items-center gap-3">
              <button className="bg-[#EBF0F5] text-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg">
                {travelers} Traveller
              </button>
              <button className="bg-[#EBF0F5] text-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg">
                Economy
              </button>
            </div>
          </div>

          {/* Location Input Fields with Search Suggestions */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="relative w-full">
              <input
                type="text"
                className="text-sm font-medium flex flex-col w-full border border-gray-400 rounded-md px-4 py-2"
                value={fromLocation}
                onChange={(e) => handleInputChange(e, "from")}
                placeholder="From"
              />
              {fromLocation && (
                <div className="absolute top-full left-0 bg-white border border-gray-400 rounded-lg mt-1 w-full z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSuggestionSelect(suggestion, "from")}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-full">
              <input
                type="text"
                className="text-sm font-medium flex flex-col w-full border border-gray-400 rounded-md px-4 py-2"
                value={toLocation}
                onChange={(e) => handleInputChange(e, "to")}
                placeholder="To"
              />
              {toLocation && (
                <div className="absolute top-full left-0 bg-white border border-gray-400 rounded-lg mt-1 w-full z-10">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSuggestionSelect(suggestion, "to")}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-[#FFB700] px-8 py-5 rounded-md"
            >
              {loading ? (
                <span className="text-white">Loading...</span>
              ) : (
                <FaSearch color="white" />
              )}
            </button>
          </div>

          {/* Displaying Search Results */}
          {loading ? (
            <div className="mt-4 text-center text-gray-500">Searching...</div>
          ) : searchResults.length > 0 ? (
            <div className="mt-4">
              <div className="text-lg font-semibold text-gray-700">
                Flights from {searchResults[0]} to {searchResults[1]}
              </div>
              <div className="text-md mt-2">
                {roundTrip
                  ? `Round trip price: $${flightPrice}`
                  : `One way price: $${flightPrice}`}
              </div>
            </div>
          ) : (
            <div className="mt-4 text-center text-gray-500">Enter your details to search flights</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
