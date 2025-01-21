import React from 'react';
import image1 from "../assets/image1.svg"
import image2 from "../assets/image2.svg"
import image3 from "../assets/image3.svg"

const Featured = () => {
    const destinations = [
        {
            id: 1,
            image: image1,
            title: "Stopover opportunity in İstanbul with Turkish Airlines",
        },
        {
            id: 2,
            image: image2,
            title: "Discover the timeless city with Touristanbul of Turkish Airlines",
        },
        {
            id: 3,
            image: image3,
            title: "The best of Abu Dhabi with exclusive Etihad Airways!",
        },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    Featured Destinations
                </h2>
                <div className="w-24 h-1 bg-[#FFB700] mt-2"></div>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {destinations.map((destination) => (
                    <article 
                        key={destination.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden group">
                            <img 
                                src={destination.image}
                                alt={destination.title}
                                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content Container */}
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 min-h-[3.5rem] line-clamp-2">
                                {destination.title}
                            </h3>

                            <div className="flex justify-end">
                                <button className="px-6 py-2.5 bg-[#FFB700] hover:bg-[#ffa600] text-black font-medium rounded-lg transition-colors duration-300 transform hover:scale-105">
                                    View More
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center mt-6 gap-2 md:hidden">
                {destinations.map((_, index) => (
                    <div 
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300"
                    />
                ))}
            </div>
        </section>
    );
};

export default Featured;