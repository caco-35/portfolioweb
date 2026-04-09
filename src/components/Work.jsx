import ProjectCard from "./ProjectCard";
import SnakeGame from "../assets/images/projects/Snake.png"
import Cronometro from "../assets/images/projects/Cronometro.png"
import FisioWeb from "../assets/images/projects/FisioWeb.png"
import eCommerceJS from "../assets/images/projects/ecommerce.png"


const works = [
    {
      imgSrc: SnakeGame,
      title: 'Game Snake',
      tags: ['JavaScript', 'HTML', 'CSS'],
      projectLink: 'https://github.com/caco-35/Snake.git'
    },
    {
      imgSrc: Cronometro,
      title: 'Cronometro',
      tags: ['JavaScript', 'HTML', 'CSS'],
      projectLink: 'https://github.com/caco-35/Cronometro.git'
    },
    {
      imgSrc: FisioWeb,
      title: 'Pagina Web Fisioterapia',
      tags: ['CSS', 'JavaScript', 'HTML', 'SASS'],
      projectLink: 'https://github.com/caco-35/proyectofisio.git'
    },
    {
      imgSrc: eCommerceJS,
      title: 'eCommerce website',
      tags: ['CSS', 'JavaScript', 'HTML'],
      projectLink: 'https://github.com/caco-35/primerentregajs.git'
    }
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">Mis proyectos destacados:</h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink}) => (
                    <ProjectCard key={title} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} className="reveal-up" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work