import React, {useState , useEffect} from 'react'
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons"; 
import { navLinks } from "../constants"; 

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>{ setMenuOpen((prev) => !prev)};

  useEffect(() =>{
    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize" , handleResize);
    return () =>window.removeEventListener("resize" , handleResize);
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
          src={headerLogo} 
          alt='logo'
          width={130}
          height={29}
          className='m-0 w-{129px} h-{29px}'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className='hover:underline font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label} 
              </a>
            </li>
          ))}
        </ul>
        <div 
        className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign In</a>
          <span>/</span>
          <a href='/'>Explore Now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img 
            src={hamburger} 
            alt='Hamburger Icon' 
            width={25} 
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
            />
        </div>
      </nav>
      {
        menuOpen && (
          <ul className='absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 flex flex-col gap-4'>
            {navLinks.map((item)=>(
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className='block font-montserrat leading-normal text-lg text-slate-gray hover:underline'>
                    {item.label}
                  </a>
              </li>
            ))}
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat'>
              <a href="/">Sign In</a>
              <span className="text-slate-gray">/</span>
              <a href="/">Explore Now</a>
            </div>
          </ul>
        )
      }
    </header>
  );
};

export default Nav;