import bootstrap from "../assets/images/bootstrap.svg"
import css3 from "../assets/images/css3.svg"
import JavaScript from "../assets/images/javascript.svg"
import nodeJS from "../assets/images/nodejs.svg"
import ReactJS from "../assets/images/react.svg"
import TailwindCSS from "../assets/images/tailwindcss.svg"
import html5 from "../assets/images/html5.svg"
import Jira from "../assets/images/jira.svg"
import Sass from "../assets/images/sass.svg"

const skillItem = [
    { imgSrc: bootstrap, label: 'Bootstrap', desc: 'Design tool' },
    { imgSrc: css3, label: 'CSS', desc: 'User Interface' },
    { imgSrc: JavaScript, label: 'JavaScript', desc: 'Interaction' },
    { imgSrc: nodeJS, label: 'NodeJS', desc: 'Web Server' },
    { imgSrc: ReactJS, label: 'React', desc: 'Framework' },
    { imgSrc: TailwindCSS, label: 'TailwindCSS', desc: 'User Interface' },
    { imgSrc: html5, label: 'HTML5', desc: 'User Interface' },
    { imgSrc: Jira, label: 'Jira', desc: 'Management' },
    { imgSrc: Sass, label: 'Sass', desc: 'User Interface' }
];

const Skill = () => {
  return (
    <section className="section py-16 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container">
            
            <div className="flex flex-col items-center mb-12 reveal-up">
                <h2 className="headline-2 text-center mb-4">Software & Skills</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-center">
                    Las herramientas que utilizo diariamente para construir soluciones digitales de alto rendimiento.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 reveal-up">
                {
                    skillItem.map(({imgSrc, label}) => (
                        <div key={label} className="flex items-center gap-3 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 bg-[#F2F2F2] dark:bg-zinc-950 hover:border-blue-600 dark:hover:border-blue-600 hover:-translate-y-1 transition-all">
                            <figure className="w-6 h-6 flex items-center justify-center">
                                <img src={imgSrc} alt={label} className="w-full h-full object-contain" />
                            </figure>
                            <span className="font-bold text-sm tracking-wide">{label}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill