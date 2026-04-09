import SnakeGame from "../assets/images/projects/Snake.png"
import Cronometro from "../assets/images/projects/Cronometro.png"
import FisioWeb from "../assets/images/projects/FisioWeb.png"
import eCommerceJS from "../assets/images/projects/ecommerce.png"

const works = [
    { imgSrc: SnakeGame, title: 'Game Snake', tags: ['JavaScript', 'HTML', 'CSS'], projectLink: 'https://github.com/caco-35/Snake.git' },
    { imgSrc: Cronometro, title: 'Cronometro', tags: ['JavaScript', 'HTML', 'CSS'], projectLink: 'https://github.com/caco-35/Cronometro.git' },
    { imgSrc: FisioWeb, title: 'Pagina Web Fisioterapia', tags: ['CSS', 'JavaScript', 'HTML', 'SASS'], projectLink: 'https://github.com/caco-35/proyectofisio.git' },
    { imgSrc: eCommerceJS, title: 'eCommerce website', tags: ['CSS', 'JavaScript', 'HTML'], projectLink: 'https://github.com/caco-35/primerentregajs.git' }
];

const Work = () => {
  return (
    <section id="work" className="section py-16 bg-[#F2F2F2] dark:bg-zinc-950">
        <div className="container">
            <h2 className="headline-2 mb-12 reveal-up text-center">Mis Proyectos</h2>
            
            <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
                {works.map(({ imgSrc, title, tags, projectLink }, index) => (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" key={title} className="group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-600 transition-all hover:shadow-2xl hover:-translate-y-1 reveal-up">
                        
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
                            <span className="text-4xl md:text-5xl font-black text-zinc-300 dark:text-zinc-800">0{index + 1}</span>
                            
                            <figure className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 shrink-0 shadow-inner">
                                <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </figure>

                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{title}</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {tags.map((tag) => (
                                        <span key={tag} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex shadow-lg">
                                <span className="material-symbols-rounded text-3xl">arrow_outward</span>
                            </div>
                        </div>

                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work