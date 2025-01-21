import React, { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import image1 from "../assets/blog1.svg"
import image2 from "../assets/blog2.svg"
import image3 from "../assets/blog3.svg"
import image4 from "../assets/blog4.svg"
import image5 from "../assets/blog5.svg"
import image6 from "../assets/blog6.svg"

const Blog = () => {
    const scrollRef = useRef(null);

    const blogs = [
        {
            id: 1,
            image: image1,
            category: "Work and Travel",
            date: "16 September 23",
            title: "Embracing the Digital Nomad Lifestyle",
            description: "Discover how digital nomads are redefining the future of work...",
            author: {
                name: "Ys Stafen",
                avatar: image6
            }
        },
        {
            id: 2,
            image: image2,
            category: image1,
            date: "15 September 23",
            title: "Top Mountain Destinations for 2024",
            description: "Explore the most breathtaking mountain getaways this year...",
            author: {
                name: "Ys Stafen",
                avatar: image5
            }
        },
        {
            id: 3,
            image: image3,
            category: "Travel Tips",
            date: "14 September 23",
            title: "Budget Travel Secrets Revealed",
            description: "Learn how to travel the world without breaking the bank...",
            author: {
                name: "Ys Stafen",
                avatar: image5
            }
        },
        {
            id: 4,
            image: image4,
            category: "Cultural Exchange",
            date: "13 September 23",
            title: "Hidden Gems of Southeast Asia",
            description: "Uncover the lesser-known treasures of Southeast Asian culture...",
            author: {
                name: "Ys Stafen",
                avatar: image6
            }
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 md:mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                            Travel Blog
                        </h2>
                        <div className="w-24 h-1 bg-[#006CE4] mt-2"></div>
                    </div>

                    {/* Navigation Buttons - Hidden on Mobile */}
                    <div className="hidden md:flex gap-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all"
                            aria-label="Scroll left"
                        >
                            <FaChevronLeft className="text-[#006CE4] text-xl" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all"
                            aria-label="Scroll right"
                        >
                            <FaChevronRight className="text-[#006CE4] text-xl" />
                        </button>
                    </div>
                </div>

                {/* Blog Cards Container */}
                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {blogs.map((blog) => (
                        <article 
                            key={blog.id} 
                            className="flex-none w-[85vw] sm:w-[400px] snap-start bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden group">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="px-3 py-1 bg-[#FFB700]/10 text-[#FFB700] text-sm font-semibold rounded-full">
                                        {blog.category}
                                    </span>
                                    <span className="text-gray-600 text-sm">
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-[#006CE4] transition-colors cursor-pointer">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {blog.description}
                                </p>

                                <div className="h-px bg-gradient-to-r from-[#006CE4]/20 via-[#006CE4]/40 to-[#006CE4]/20 my-4"></div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full overflow-hidden">
                                            <img 
                                                src={blog.author.avatar} 
                                                alt={blog.author.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {blog.author.name}
                                        </span>
                                    </div>

                                    <button className="group flex items-center gap-1 text-[#FFB700] hover:text-[#ff9d00] transition-all">
                                        <span className="text-sm font-medium">Read more</span>
                                        <FaChevronRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Scroll Indicator - Mobile Only */}
                <div className="flex justify-center mt-6 gap-2 md:hidden">
                    {blogs.map((_, index) => (
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

export default Blog;