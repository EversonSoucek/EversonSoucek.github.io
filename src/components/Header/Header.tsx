import React, { useState, useEffect } from 'react';
import logo from "../../assets/img/ES Logo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Header.css";

export default function Header() {
  const [opacity, setOpacity] = useState(0); // Começa com opacidade baixa (transparente)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // O header começa transparente e vai ficando opaco
      const newOpacity = Math.min(1, scrollPosition / 1100); 
      setOpacity(newOpacity); // Atualiza a opacidade com base no scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header' style={{ backgroundColor: `rgba(21, 21, 21, ${opacity})` }}>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li>
            <img src={logo} alt='Logo que parece ter a semelhança da letra E e A' className="header__logo" />
          </li>
          <li><a href="#home" className='header__list-link'>Home</a></li>
          <li><a href="#sobre" className='header__list-link'>Sobre Mim</a></li>
          <li><a href="#skills" className='header__list-link'>Skills</a></li>
          <li><a href="#experiencias" className='header__list-link'>Experiências</a></li>
          <li><a href="#projects" className='header__list-link'>Projects</a></li>
          <li><a href="#contact" className='header__list-link'>Contact</a></li>
        </ul>
        <div className='header__social'>
          <a href="https://github.com/EversonSoucek" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaGithub className="header__icon" size={40} color='#8331EB' />
          </a>
          <a href="https://www.linkedin.com/in/everson-soucek-152984232/" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaLinkedin className="header__icon" size={40} color='#8331EB' />
          </a>
        </div>
      </nav>
    </header>
  );
}
