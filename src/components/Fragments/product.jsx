import { useScroll, useTransform, motion } from "framer-motion";
import Title from "../Elements/Scroll";
import ServiceCard from "../Elements/Card/ServiceCard";
import img from "../../assets/public/img-2.png";


const Product = () => {
    return (
        <section className="py-20 my-20 md:pt-15 overflow-clip">
            <div className="py-4">
                <Title className=" text-slate-500">Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami </Title>
                <Title moveDistance={600} initialX={-600} className="text-slate-400">Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami • Produk Kami </Title>
            </div>
            <div className="flex flex-col gap-4 px-6 mt-8 md:px-12 lg:px-22">
               <Title className="flex w-48 gap-4 lg:w-64" initialX={300} scrollRange={[0, 0.7]}>
                    <ServiceCard title="Profile Company" image={img} description="Platform untuk menampilkan profil perusahaan secara profesional dan dinamis, dengan fitur manajemen konten yang mudah digunakan."/> 
                    <ServiceCard title="Sistem Kasir" image={img} description="Solusi kasir terpadu untuk mengelola transaksi ritel, inventaris, dan laporan penjualan secara real-time."/>
                    <ServiceCard title="E-Commerce" image={img} description="Platform e-commerce yang memudahkan pengelolaan bisnis online, mulai dari produk hingga pembayaran dan pengiriman."/>
                    <ServiceCard title="E-Learning" image={img} description="Solusi e-learning yang menyediakan platform pembelajaran digital dengan manajemen kursus, ujian, dan pelaporan kinerja siswa."/>
                </Title>
                <Title className="flex w-48 gap-4 lg:w-64" moveDistance={600} initialX={-300} scrollRange={[0, 0.7]}>
                    <ServiceCard title="Profile Company" image={img} description="Platform untuk menampilkan profil perusahaan secara profesional dan dinamis, dengan fitur manajemen konten yang mudah digunakan."/> 
                    <ServiceCard title="Sistem Kasir" image={img} description="Solusi kasir terpadu untuk mengelola transaksi ritel, inventaris, dan laporan penjualan secara real-time."/>
                    <ServiceCard title="E-Commerce" image={img} description="Platform e-commerce yang memudahkan pengelolaan bisnis online, mulai dari produk hingga pembayaran dan pengiriman."/>
                    <ServiceCard title="E-Learning" image={img} description="Solusi e-learning yang menyediakan platform pembelajaran digital dengan manajemen kursus, ujian, dan pelaporan kinerja siswa."/>
                </Title>
            </div>
        </section>
    )
}

export default Product;