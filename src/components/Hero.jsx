/*COMPONENTS*/
import { ButtonPrimary, ButtonOutline } from "./Button"
import CV from '../assets/data/CV - Carlos Couste.pdf'

const Hero = () => {
  return (
    <section id="home" className="section flex flex-col justify-center min-h-[90vh]">
        <div className="container flex flex-col items-center text-center">
            
            <p className="display-text text-3xl md:text-5xl lg:text-7xl mb-4 reveal-up">¡Hey, soy Carlos!</p>
            
            <h1 className="headline-1 max-w-[15ch] mx-auto reveal-up">
                DESARROLLADOR WEB FULL STACK
            </h1>
            
            <p className="mt-8 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-lg md:text-xl reveal-up">
                Aporto diseño moderno y lógica sólida a la web con React, UI/UX y tecnologías de vanguardia.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10 reveal-up">
                <ButtonPrimary href={CV} target="_blank" rel="noopener noreferrer" label="Descargar CV" icon="download" />
                <ButtonOutline href="#about" label="Descubrir" icon="arrow_downward" />
            </div>

        </div>
    </section>
  )
}

export default Hero