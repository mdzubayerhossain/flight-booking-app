import image1 from "../assets/blog1.svg"
import image2 from "../assets/blog2.svg"
import image3 from "../assets/blog3.svg"
import image4 from "../assets/blog4.svg"
import image5 from "../assets/blog5.svg"
import image6 from "../assets/blog6.svg"

const Blog = () => {
    return (
        <div className="w-[60%] mx-auto overflow-hidden">
            <h2 className="text-3xl font-semibold mt-5 ml-5">Travel Blog</h2>
            <div className="mt-10 mb-20 flex items-center justify-between">
                {/*blog-1  */}
                <div className="shadow-2xl rounded-xl">
                    <img src={image1} />
                    <div className="p-4 mb-5">
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-[#FFB700] text-sm font-medium">Work and Travel</p>
                            <p className="text-sm font-medium">16 septembar 23</p>
                        </div>
                        <p className="text-lg font-bold mt-3">
                            Embracing the Digital Nomad <br /> Lifestyle the Digital Nomad thr...
                        </p>
                        <hr className="w-full border border-solid border-[#006CE4] shadow-2xl my-2"></hr>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={image4} />
                                <h2 className="text-sm">Ys Stafen</h2>
                            </div>
                            <p className="text-[#FFB700] font-medium text-sm">Read more {">"}{">"}</p>
                        </div>
                    </div>
                </div>
                {/* blog-2 */}
                <div className="shadow-2xl rounded-xl">
                    <img src={image2} />
                    <div className="p-4 mb-5">
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-[#FFB700] text-sm font-medium">Work and Travel</p>
                            <p className="text-sm font-medium">16 septembar 23</p>
                        </div>
                        <p className="text-lg font-bold mt-3">
                            Embracing the Digital Nomad <br /> Lifestyle the Digital Nomad thr...
                        </p>
                        <hr className="w-full border border-solid border-[#006CE4] shadow-2xl my-2"></hr>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={image5} />
                                <h2 className="text-sm">Ys Stafen</h2>
                            </div>
                            <p className="text-[#FFB700] font-medium text-sm">Read more {">"}{">"}</p>
                        </div>
                    </div>
                </div>
                {/* blog-3 */}
                <div className="shadow-2xl rounded-xl">
                    <img src={image3} />
                    <div className="p-4 mb-5">
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-[#FFB700] text-sm font-medium">Work and Travel</p>
                            <p className="text-sm font-medium">16 septembar 23</p>
                        </div>
                        <p className="text-lg font-bold mt-3">
                            Embracing the Digital Nomad <br /> Lifestyle the Digital Nomad thr...
                        </p>
                        <hr className="w-full border border-solid border-[#006CE4] shadow-2xl my-2"></hr>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={image6} />
                                <h2 className="text-sm">Ys Stafen</h2>
                            </div>
                            <p className="text-[#FFB700] font-medium text-sm">Read more {">"}{">"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;