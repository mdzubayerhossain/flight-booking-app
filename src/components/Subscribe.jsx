import image1 from "../assets/subscribe.svg";

const Subscribe = () => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20">
      <h2 className="text-4xl font-semibold text-center text-[#006CE4]">Featured Destinations</h2>
      <div className="mt-12 flex items-center justify-center bg-gradient-to-r from-[#006CE4] via-[#00A4E4] to-[#006CE4] p-8 rounded-2xl shadow-xl">
        <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col items-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Subscribe to our <br /> Newsletter!
          </h1>
          <h2 className="text-xl font-medium mt-4 mb-6">
            Stay updated with the latest trends, tips, and exclusive offers!
          </h2>
          <input
            className="w-full sm:w-2/3 mt-4 p-4 rounded-xl text-[#006CE4] border-2 border-[#006CE4] focus:outline-none focus:ring-2 focus:ring-[#FFB700] transition duration-300"
            type="email"
            placeholder="Enter your email"
          />
          <button
            className="w-full sm:w-2/3 py-4 mt-6 mb-4 rounded-xl bg-[#FFB700] text-white text-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </button>
        </div>
        <div className="hidden sm:block ml-8 transform hover:scale-105 transition-transform duration-300">
          <img src={image1} alt="Subscribe illustration" className="w-80 h-auto" />
        </div>
      </div>
      <div className="mt-12"></div> {/* Added margin space to push away the footer */}
    </div>
  );
};

export default Subscribe;
