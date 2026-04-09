import SkillCard from "./SkillCard";
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
    {
      imgSrc: bootstrap,
      label: 'Bootstrap',
      desc: 'Design tool'
    },
    {
      imgSrc: css3,
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: JavaScript,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: nodeJS,
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: ReactJS,
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: TailwindCSS,
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: html5,
      label: 'HTML5',
      desc: 'User Interface'
    },
    {
      imgSrc: Jira,
      label: 'Jira',
      desc: 'User Interface'
    },
    {
      imgSrc: Sass,
      label: 'Sass',
      desc: 'User Interface'
    }
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">Tecnologías que manejo</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 mb-8 max-w-[50ch]">Descubra las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales y de alto rendimiento.</p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}) => (
                        <SkillCard key={label} imgSrc={imgSrc} label={label} desc={desc} className="reveal-up" />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill