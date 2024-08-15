import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Elements/Scroll";
import ServiceCard from "../Elements/Card/ServiceCard";
import img from "../../assets/public/img-2.png";

const Service = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

    return (
        <section className="py-24 my-20 md:pt-15">
            <div className="py-4 bg-green-400 overflow-clip ">
                <Title style= {x}>Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami 📖 Layanan Kami </Title>
            </div>
            <div className="flex justify-center gap-4 px-6 mt-8 md:px-12 lg:px-22">
                <ServiceCard title="Web Development" image={img} description="Kami melayani pembuatan website seperti profile company, sistem informasi, e-commerce, e-learning, dan lain-lain."/>
                <ServiceCard title="Web Maintenance" image={img} description="Kami membantu melakukan perawatan pada website yang telah ada dengan content writing, penambahan fitur, serta pembaruan versi website."/>
            </div>
        </section>
    );
};

export default Service;
