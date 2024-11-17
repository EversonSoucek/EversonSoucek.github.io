import React, { useState, useEffect } from 'react';
import logo from "../../assets/img/ES Logo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Header.css";

export default function Header() {
  const [opacidade, setOpacidade] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Calcula a opacidade com base na posição de scroll da página
  useEffect(() => {
    const controlaOpacidadeAoScrollar = () => {
      const posicaoScroll = window.scrollY;
      const novaOpacidade = Math.min(1, posicaoScroll / 1000);
      setOpacidade(novaOpacidade);
    };

    window.addEventListener('scroll', controlaOpacidadeAoScrollar);

    return () => {
      window.removeEventListener('scroll', controlaOpacidadeAoScrollar);
    };
  }, []);

  // Detecta se o dispositivo é mobile
  useEffect(() => {
    const verificaDispositivo = () => {
      setIsMobile(window.innerWidth <= 768); // Define o limite para mobile
    };

    verificaDispositivo(); // Verifica ao carregar o componente
    window.addEventListener('resize', verificaDispositivo);

    return () => {
      window.removeEventListener('resize', verificaDispositivo);
    };
  }, []);

  // Retorna nulo se estiver em um dispositivo móvel
  if (isMobile) {
    return null;
  }

  return (
    <header className='header' style={{ backgroundColor: `rgba(21, 21, 21, ${opacidade})` }}>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li>
            <img src={logo} alt='Logo que parece ter a semelhança da letra E e A' className="header__logo" />
          </li>
          <li><a href="#home" className='header__list-link'>Home</a></li>
          <li><a href="#sobre" className='header__list-link'>Sobre Mim</a></li>
          <li><a href="#skills" className='header__list-link'>Skills</a></li>
          <li><a href="#experiencias" className='header__list-link'>Experiências</a></li>
          <li><a href="#projetos" className='header__list-link'>Projetos</a></li>
          <li><a href="#contato" className='header__list-link'>Contato</a></li>
        </ul>
        <div className='header__social'>
          <a href="https://github.com/EversonSoucek" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaGithub className="header__icon" size={40} color='#8331EB' alt="Logo do github" />
          </a>
          <a href="https://www.linkedin.com/in/everson-soucek-152984232/" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaLinkedin className="header__icon" size={40} color='#8331EB' alt="Logo do linkedin" />
          </a>
        </div>
      </nav>
    </header>
  );
}
