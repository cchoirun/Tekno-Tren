import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Elements/Scroll";
import ServiceCard from "../Elements/Card/ServiceCard";
import img from "../../assets/public/img-2.png";


const Client = () => {
    return (
        <section className="py-20 my-20 md:pt-15 overflow-clip">
            <div className="flex justify-center w-full py-4 bg-blue-100 overflow-clip">
               <h1 className="font-bold text-slate-400 text-9xl">Klien Kami</h1>
            </div>
            <div className="flex justify-center gap-4 px-6 mt-8 md:px-12 lg:px-22">
               
            </div>
        </section>
    )
}

export default Client;