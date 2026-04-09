import { useState } from 'react';
import logo from '../assets/images/logo.svg'

/**Components */
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Header = () => { 

    const [navOpen, setNavOpen] = useState(false);

    return(
        <header className='fixed top-0 left-0 w-full h-24 flex items-center z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300'>
            <div className="container relative flex justify-between items-center w-full">
                
                {/* Left: Menu & Nav */}
                <div className="flex items-center">
                    <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
                        <span className='material-symbols-rounded'>
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <div className="hidden md:block">
                        <Navbar navOpen={navOpen}/>
                    </div>
                </div>

                {/* Center: Logo */}
                <h1 className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <a href="/" className='logo flex items-center gap-2'>
                        <img src={logo} width={40} height={40} alt="Carlos Cousté" className="dark:invert grayscale" />
                    </a>
                </h1>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <ThemeToggle />
                    <a href="#contact" className='btn btn-secondary hidden md:flex hover:-translate-y-1 transition-transform'>Contactame</a>
                </div>

                {/* Mobile Dropdown Navbar */}
                <div className="md:hidden">
                    <Navbar navOpen={navOpen}/>
                </div>

            </div>
        </header>
    )
}

export default Header;