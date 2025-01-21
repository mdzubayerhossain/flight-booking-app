import image1 from "../assets/deal1.svg"
import image2 from "../assets/deal2.svg"
import image3 from "../assets/deal3.svg"
const Offers = () => {
    return (
        <div className="w-[60%] mx-auto overflow-hidden">
            <h2 className="text-3xl font-semibold mt-5 ml-5">Featured Destinations</h2>
            <div className="mt-10 mb-20 flex items-center justify-around gap-4">
                <div className="flex items-center gap-3 shadow-2xl w-full rounded-xl">
                    <img src={image1} />
                    <div>
                        <h4 className="text-xs font-medium text-black">With bkash payment only</h4>
                        <h2 className="text-base font-semibold text-[#006CE4] pr-8">
                            up to 14% discount <br /> on the base fare of <br /> domestic flights
                        </h2>
                    </div>
                </div>
                <div className="flex items-center gap-3 shadow-2xl w-full rounded-xl">
                    <img src={image2} />
                    <div>
                        <h4 className="text-xs font-medium text-black">With bkash payment only</h4>
                        <h2 className="text-base font-semibold text-[#006CE4] pr-8">
                            up to 14% discount <br /> on the base fare of <br /> domestic flights
                        </h2>
                    </div>
                </div>
                <div className="flex items-center gap-3 shadow-2xl w-full rounded-xl">
                    <img src={image3} />
                    <div>
                        <h4 className="text-xs font-medium text-black">With bkash payment only</h4>
                        <h2 className="text-base font-semibold text-[#006CE4] pr-8">
                            up to 14% discount <br /> on the base fare of <br /> domestic flights
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;