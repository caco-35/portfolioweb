import logo from '../assets/images/logo.svg'

const sitemap = [
    {
      label: 'Inicio',
      href: '#home'
    },
    {
      label: 'Sobre Mi',
      href: '#about'
    },
    {
      label: 'Proyectos',
      href: '#work'
    },
    {
      label: 'Contactame',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

import { ButtonPrimary } from "./Button";

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">¡Trabajemos juntos/as hoy!</h2>
                    <ButtonPrimary href="https://w.app/Okh4Q9" label="Comenzar proyecto" icon="Phone_iPhone" classes="reveal-up"/>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitio</p>
                        <ul>{sitemap.map(({label, href}) => (
                            <li key={label}><a href={href} className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200">{label}</a></li>
                        ))}</ul>
                    </div>
                    <div>
                        <p className="mb-2 reveal-up">Redes sociales</p>
                        <ul>{socials.map(({label, href}) => (
                            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200">{label}</a></li>
                        ))}</ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="/" className="logo" ><img src={logo} width={40} height={40} alt="logo" /></a>
                <p className="text-zinc-500 text-sm"> &copy; 2024 <span className="text-zinc-900 dark:text-zinc-200">Carlos Cousté</span></p>   
            </div>
        </div>
    </footer>
  )
}

export default Footer