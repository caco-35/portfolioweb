import Avatar from '../assets/images/avatar-1.jpg' 

const aboutItems = [
    {
      label: 'Proyectos',
      number: 6
    },
    {
      label: 'Años facturación',
      number: 3
    }
];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
                
                {/* Column 1: Text */}
                <div className="reveal-up order-2 lg:order-1 flex flex-col justify-center">
                    <h2 className="title-1 mb-6">Sobre Mí</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        Tecnólogo Informático en formación, especializándome en desarrollo y sistemas.
                        Actualmente gerente de Soporte en facturación electrónica, busco desafíos IT
                        para aplicar mis conocimientos de React, JavaScript, UI/UX y crear productos digitales increíbles.
                    </p>
                </div>

                {/* Column 2: Arch Photo */}
                <div className="reveal-up order-1 lg:order-2 flex justify-center">
                    <figure className="w-64 h-80 md:w-80 md:h-[400px] lg:w-[350px] lg:h-[450px] bg-zinc-200 dark:bg-zinc-800 rounded-t-full rounded-b-[40px] overflow-hidden border-4 md:border-8 border-[#F2F2F2] dark:border-zinc-950 shadow-2xl relative">
                        <img src={Avatar} alt="Carlos Cousté" className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105" />
                    </figure>
                </div>

                {/* Column 3: Stats */}
                <div className="reveal-up order-3 lg:order-3 flex flex-col gap-6 md:gap-10 justify-center lg:items-end lg:text-right">
                    {
                        aboutItems.map(({label, number}) => (
                            <div key={label} className="border-b-2 border-zinc-200 dark:border-zinc-800 pb-4 w-full lg:w-auto">
                                <div className="flex items-center lg:justify-end gap-1 mb-1">
                                    <span className="text-6xl md:text-8xl font-black">{number}</span>
                                    <span className="text-blue-600 text-5xl md:text-6xl font-black">+</span>
                                </div>
                                <p className="text-sm md:text-base font-bold uppercase tracking-widest text-zinc-500 lg:max-w-[150px]">{label}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default About