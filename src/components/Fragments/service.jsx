import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Elements/Scroll";
import ServiceCard from "../Elements/Card/ServiceCard";
import img from "../../assets/public/img-2.png";

const Service = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

    return (
        <section className="my-20 py-18 md:pt-15">
            <div className="bg-green-400 overflow-clip ">
                <Title style= {x}>Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami </Title>
            </div>
            <div className="flex justify-center gap-4 px-6 mt-8 md:px-12 lg:px-22">
                <ServiceCard title="Web Development" image={img} description="Kami membantu Anda menciptakan website yang unik dan sesuai visi Anda."/>
                <ServiceCard title="Web Maintenance" image={img} description="Kami membantu Anda menciptakan website yang unik dan sesuai visi Anda."/>
            </div>
        </section>
    );
};

export default Service;
