import image1 from "../assets/image1.svg"
import image2 from "../assets/image2.svg"
import image3 from "../assets/image3.svg"

const Featured = () => {
    return (
        <div className="w-[60%] mx-auto overflow-hidden">
            <h2 className="text-3xl font-semibold mt-5 ml-5">Featured Destinations</h2>
            <div className="mt-10 mb-20 flex flex-row items-center justify-around">
                <div className="shadow-2xl p-3 rounded-xl w-fit">
                    <img src={image1} />
                    <h2 className="text-lg font-bold mt-2">Stopover opportunity in İstanbul <br /> with Turkish Airlines</h2>
                    <button className="px-6 py-2 my-2 ml-24 rounded-lg bg-orange-400 text-black">View More</button>
                </div>
                <div className="shadow-2xl p-3 rounded-xl w-fit">
                    <img src={image2} />
                    <h2 className="text-lg font-bold mt-2">Discover the timeless city with <br /> Touristanbul of Turkish Airlines</h2>
                    <button className="px-6 py-2 my-2 ml-24 rounded-lg bg-orange-400 text-black">View More</button>
                </div>
                <div className="shadow-2xl p-3 rounded-xl w-fit">
                    <img src={image3} />
                    <h2 className="text-lg font-bold mt-2">the best of Abu Dhabi with <br /> exclusive Etihad Airways!</h2>
                    <button className="px-6 py-2 my-2 ml-24 rounded-lg bg-orange-400 text-black">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;