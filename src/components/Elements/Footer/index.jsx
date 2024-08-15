import logo from "../../../assets/public/logo.png";
import img from "../../../assets/public/hero.png";
import { AiFillInstagram, AiFillLinkedin, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
    <footer className="bg-white">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
        <div
            className="py-8 border-b border-gray-100 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
        >
            

            <div className="mt-8 space-y-4 lg:mt-0">
            <span className="hidden w-10 h-1 bg-teal-500 rounded lg:block"></span>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5799030353055!2d112.799521!3d-7.288544200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa7205a41187%3A0x7f68d31ec87be552!2sJl.%20Keputih%20Gg.%20II%20C%20No.4%2C%20Keputih%2C%20Kec.%20Sukolilo%2C%20Surabaya%2C%20Jawa%20Timur%2060111!5e0!3m2!1sid!2sid!4v1723687110033!5m2!1sid!2sid" 
            className="w-full h-full" style={{border:0}}loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
            </div>
        </div>

        <div className="py-8 lg:py-16 lg:pe-16">
            <div className="lg:block">
               <img src={logo} className="w-40 mb-3" />
               <p>Empower the Potential Excellence</p>
               <p>Jl. Keputih Gg. II C No. 4, Keputih, Sukolilo, Surabaya, Jawa Timur, 60111</p>
               <p>admin@teknotrenhouse.com</p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
            <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Web Development </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Web Maintenance </a>
                </li>

                
                </ul>
            </div>

            <div>
                <p className="mb-6 font-medium text-gray-900">Social Media</p>

                <div className="flex gap-2">
                    <a href="https://wa.me/6285748783507">
                        <AiOutlineWhatsApp className="w-6 h-6 text-gray-700 hover:text-green-600" />
                    </a>
                    <a href="https://www.instagram.com/teknotren_house/">
                        <AiFillInstagram className="w-6 h-6 text-gray-700 hover:text-pink-700" />
                    </a>
                    <a href="https://www.linkedin.com/company/teknotren-house">
                        <AiFillLinkedin className="w-6 h-6 text-gray-700 hover:text-blue-800" />
                    </a>

                </div>
            </div>

            
            </div>

            <div className="pt-8 mt-8 border-t border-gray-100">
            <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                </li>

                <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                </li>

                <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500">&copy; 2024. Tekno Tren. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
    </footer>
    );};

export default Footer;