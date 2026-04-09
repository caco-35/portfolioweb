import logo from '../assets/images/logo.svg'
import { ButtonPrimary } from "./Button";

const sitemap = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Mi', href: '#about' },
    { label: 'Proyectos', href: '#work' },
    { label: 'Contactame', href: '#contact' }
];
  
const socials = [
    { label: 'GitHub', href: 'https://github.com/caco-35' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-alberto-couste-montesdeoca-2b31bb204' },
    { label: 'Twitter X', href: 'https://x.com/cacocouste' },
    { label: 'Instagram', href: 'https://www.instagram.com/cacoc35' }
];


const Footer = () => {
  return (
    <footer className="pt-20 lg:pt-32 pb-10 bg-zinc-950 text-white rounded-t-[40px] md:rounded-t-[80px] mt-10 overflow-hidden">
        <div className="container">
            <div className="lg:grid lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-end mb-20">
                <div className="min-w-0">
                    <h2 className="text-5xl md:text-7xl lg:text-[75px] xl:text-[90px] font-black uppercase leading-none tracking-tighter mb-10 reveal-up break-words">
                        ¿Buscas un <br/><span className="text-blue-600 block mt-2">Desarrollador?</span>
                    </h2>
                    <ButtonPrimary href="https://w.app/Okh4Q9" label="Comenzar proyecto" icon="send" classes="reveal-up border-2 border-transparent hover:border-white w-full max-w-sm"/>
                </div>
                
                <div className="grid grid-cols-2 gap-8 lg:pl-20 mt-16 lg:mt-0 reveal-up">
                    <div>
                        <p className="mb-6 font-bold uppercase tracking-widest text-zinc-500">Menú</p>
                        <ul className="flex flex-col gap-4">{sitemap.map(({label, href}) => (
                            <li key={label}><a href={href} className="text-lg font-bold text-zinc-300 hover:text-white hover:pl-2 transition-all">{label}</a></li>
                        ))}</ul>
                    </div>
                    <div>
                        <p className="mb-6 font-bold uppercase tracking-widest text-zinc-500">Social</p>
                        <ul className="flex flex-col gap-4">{socials.map(({label, href}) => (
                            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-zinc-300 hover:text-white hover:pl-2 transition-all">{label}</a></li>
                        ))}</ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-zinc-800">
                <a href="/" className="logo flex items-center gap-3 mb-6 md:mb-0" >
                    <img src={logo} width={40} height={40} alt="logo" className="invert" />
                    <span className="font-black text-2xl tracking-widest uppercase">Caco.</span>
                </a>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest"> &copy; {new Date().getFullYear()} Carlos Cousté</p>   
            </div>
        </div>
    </footer>
  )
}

export default Footer