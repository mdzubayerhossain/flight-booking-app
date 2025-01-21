import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import image1 from "../assets/deal1.svg"
import image2 from "../assets/deal2.svg"
import image3 from "../assets/deal3.svg"

const Offers = () => {
    const scrollRef = useRef(null);

    const offers = [
        {
            id: 1,
            image: image1,
            paymentMethod: "With bKash payment only",
            title: "up to 14% discount on the base fare of domestic flights"
        },
        {
            id: 2,
            image: image2,
            paymentMethod: "With bKash payment only",
            title: "up to 14% discount on the base fare of domestic flights"
        },
        {
            id: 3,
            image: image3,
            paymentMethod: "With bKash payment only",
            title: "up to 14% discount on the base fare of domestic flights"
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Navigation */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Featured Offers
                        </h2>
                        <div className="w-24 h-1 bg-[#006CE4] mt-2"></div>
                    </div>

                    {/* Navigation Buttons - Hidden on Mobile */}
                    <div className="hidden md:flex gap-3">
                        <button 
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all"
                            aria-label="Scroll left"
                        >
                            <FaChevronLeft className="text-[#006CE4]" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all"
                            aria-label="Scroll right"
                        >
                            <FaChevronRight className="text-[#006CE4]" />
                        </button>
                    </div>
                </div>

                {/* Offers Container */}
                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {offers.map((offer) => (
                        <article 
                            key={offer.id}
                            className="flex-none w-[85vw] sm:w-[300px] md:w-[350px] flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
                        >
                            {/* Image */}
                            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg">
                                <img 
                                    src={offer.image}
                                    alt=""
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <p className="text-xs font-medium text-gray-600 mb-2">
                                    {offer.paymentMethod}
                                </p>
                                <h3 className="text-base md:text-lg font-semibold text-[#006CE4] leading-tight">
                                    {offer.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Scroll Indicators - Mobile Only */}
                <div className="flex justify-center mt-4 gap-2 md:hidden">
                    {offers.map((_, index) => (
                        <div 
                            key={index}
                            className="w-2 h-2 rounded-full bg-gray-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;  