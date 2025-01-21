import { FaMap } from "react-icons/fa";
import logo from "../assets/footer2.svg";
import logoText from "../assets/footer1.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0056B3] via-[#006CE4] to-[#0056B3] text-white py-10">
            <div className="w-[80%] mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Address Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Address</h3>
                        <p className="text-sm">
                            House- 75 Ka, Main Rd, Dhaka 1216
                        </p>
                        <div className="flex items-center gap-2 mt-2 hover:text-[#FFA500] cursor-pointer">
                            <FaMap className="text-lg" />
                            <span className="text-sm font-medium underline">View on Maps</span>
                        </div>
                    </div>
                    
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Stories</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">Airlines</a></li>
                            <li><a href="#" className="hover:underline">Testimonials</a></li>
                        </ul>
                    </div>
                    
                    {/* Join Us Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Join Us</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="text-sm space-y-2">
                            <li>+880 1234562890</li>
                            <li>+880 1345628980</li>
                            <li>info@airbook.com</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-white my-10" />

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img className="w-12" src={logo} alt="Logo" />
                        <img src={logoText} alt="Logo Text" />
                    </div>

                    {/* Copyright */}
                    <p className="text-xs font-semibold text-center md:text-left">
                        © {new Date().getFullYear()} Zubayer. All Rights Reserved.
                    </p>

                    {/* Social Media */}
                    <div className="flex items-center gap-5">
                        <a href="#"><img src={youtube} alt="YouTube" className="w-6 hover:scale-110 transition-transform" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" className="w-6 hover:scale-110 transition-transform" /></a>
                        <a href="#"><img src={linkedin} alt="LinkedIn" className="w-6 hover:scale-110 transition-transform" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
