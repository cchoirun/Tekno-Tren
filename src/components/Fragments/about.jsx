import Paper from "../Elements/Card";
import img from "../../assets/public/hero.png";
// import Card from "../Elements/Card";
const About = () => {
    return (
        <section className="flex flex-col-reverse px-6 my-10 md:grid md:grid-cols-2 py-18 md:pt-15 md:px-12 lg:px-22">
            <div className="hidden gap-2 md:flex md:flex-wrap">
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">instagram.com/teknotren_house</a>}/>
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">twitter.com/teknotren_house</a>}/>
                <Paper className="w-32 md:w-48 lg:w-64" title="Tekno Tren" width= {250} imageSrc={img} description= {<a href="https://instagram.com/teknotren_house">tiktok.com/teknotren_house</a>}/>
            </div>
            <div className="text-2xl md:text-3xl lg:text-5xl line-height-[1.5] ">
             <p>
                Kami adalah Software House yang berdedikasi untuk menyediakan layanan Teknologi Informasi terbaik bagi bisnis Anda. Dengan fokus pada pembuatan website, maintenance website, dan berbagai sistem informasi inovatif, Tekno Tren hadir sebagai mitra strategis untuk membantu bisnis Anda tumbuh dan berkembang.
             </p>
            </div>
            
        </section>
    )
}

export default About;



