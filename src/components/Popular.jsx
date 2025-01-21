import { FaStar } from "react-icons/fa";
import image1 from "../assets/popular1.svg";
import image2 from "../assets/popular2.svg";
import image3 from "../assets/popular3.svg";
import image4 from "../assets/popular4.svg";
import image5 from "../assets/popular5.svg";
import image6 from "../assets/popular6.svg";

const Popular = () => {
  const airlines = [
    { image: image1, name: "Biman Bangladesh", reviews: "783", rating: 4 },
    { image: image2, name: "US-Bangla Airlines", reviews: "650", rating: 4.5 },
    { image: image3, name: "NovoAir", reviews: "540", rating: 4.2 },
    { image: image4, name: "Qatar Airways", reviews: "1020", rating: 4.8 },
    { image: image5, name: "Emirates", reviews: "2000", rating: 4.9 },
    { image: image6, name: "Singapore Airlines", reviews: "1500", rating: 4.7 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Popular Airlines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition rounded-lg p-4 flex items-center gap-4 hover:scale-105"
          >
            <img
              src={airline.image}
              alt={airline.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                {airline.name}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                <FaStar color="orange" />
                <span className="text-gray-700 font-medium">
                  {airline.rating} ({airline.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
