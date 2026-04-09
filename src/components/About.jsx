import logo from '../assets/images/logo.svg'

const aboutItems = [
    {
      label: 'Proyectos personales',
      number: 6
    },
    {
      label: 'Años en facturación electrónica',
      number: 3
    }
  ];

const About = () => {


  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-200/50 dark:bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 md:mb-8 mg:text-xl md:max-w-[60ch]">
                Tecnólogo Informático en formación, especializándome en desarrollo, puesta en marcha, mantenimiento y administración de
                sistemas informáticos y complementando mis conocimientos con certificaciones y cursos como React, Angular, Python,
                Spring, C#, .Net y Java.
                Actualmente trabajando como gerente de Soporte y Consultoría en empresa reconocida de facturación electrónica, me
                encuentro en busca de desafíos que me permitan aprender en la practica profesional y fortalecer lo aprendido dentro de
                empresas IT nacionales o extranjeras.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                    {
                        aboutItems.map(({label, number}) => (
                            <div key={label}>
                                <div className="flex items-center md:mb-2 ">
                                    <span className="text-2xl font-semibold md:text-4xl ">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img src={logo} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About