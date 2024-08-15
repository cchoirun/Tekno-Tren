import Paper from "../Elements/Card";
import img from "../../assets/public/hero.png";
import { SocialIcon } from "react-social-icons";
// import Card from "../Elements/Card";
const About = () => {
    return (
        <section className="flex flex-col-reverse px-6 my-32 md:grid md:grid-cols-2 py-18 md:pt-15 md:px-12 lg:px-22">
            <div className="hidden gap-2 md:flex md:flex-wrap">
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">instagram.com/teknotren_house</a>}/>
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">twitter.com/teknotren_house</a>}/>
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">tiktok.com/teknotren_house</a>}/>
            </div>
            <div className="text-2xl md:text-3xl lg:text-5xl line-height-[1.5] ">
             <p>
                Kami adalah Software House yang berdedikasi untuk menyediakan layanan Teknologi Informasi terbaik bagi bisnis Anda. Dengan fokus pada pembuatan website, maintenance website, dan berbagai sistem informasi inovatif, Tekno Tren hadir sebagai mitra strategis untuk membantu bisnis Anda tumbuh dan berkembang.
             </p>
             <p className="mt-4 text-lg text-slate-600">Sosial media kami : </p>
             <div className="flex gap-2">
                <SocialIcon url="https://api.whatsapp.com/send/?phone=6285748783507&text&type=phone_number&app_absent=0" className="" fgColor="#fff" style={{ height: 40, width: 40 }} />
                <SocialIcon url="https://instagram.com/teknotren_house" className="" fgColor="#fff" style={{ height: 40, width: 40 }} />
                <SocialIcon url="https://www.linkedin.com/company/teknotren-house" className="" fgColor="#fff" style={{ height: 40, width: 40 }} />
             </div>
            </div>
            
        </section>
    )
}

export default About;



