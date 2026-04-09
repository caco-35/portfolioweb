
/*COMPONENTS*/
import { ButtonPrimary, ButtonOutline } from "./Button"
import HeroBanner from '../assets/images/hero-banner.png'
import Avatar from '../assets/images/avatar-1.jpg'
import CV from '../assets/data/CV - Carlos Couste.pdf'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src={Avatar} width={40} height={40} alt="Carlos Couste" className="image-cover" />
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Disponible
                    </div>
                </div>
                <h1 className="headline-1 max-w-[15ch] sm:max-w-20ch lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">Apasionado por la programación y el diseño web</h1>
                <div className="flex items-center gap-3">
                    <ButtonPrimary  href={CV} target="_blank" rel="noopener noreferrer" label="Descargar CV" icon="download" />

                    <ButtonOutline href="#about" label="Desplácese hacia abajo" icon="arrow_downward"/>
                </div>
            </div>
            <div className="hidden lg:block ">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40 40 to-65% rounded-[60px] overflow-hidden" >
                    <img src={HeroBanner} width={656} height={800} alt="Carlos Couste" className="w-full"/>
                </figure>
            </div>
        </div>
    </section>
  )
}


export default Hero