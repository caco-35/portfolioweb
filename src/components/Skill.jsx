import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/html5.svg',
      label: 'HTML5',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/jira.svg',
      label: 'Jira',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/sass.svg',
      label: 'Sass',
      desc: 'User Interface'
    }
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">Tecnologías que manejo</h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">Descubra las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales y de alto rendimiento.</p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} className="reveal-up" />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill