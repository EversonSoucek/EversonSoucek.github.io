import React, { useState, useEffect } from 'react';
import logo from "../../assets/img/ES Logo.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Header.css";

export default function Header() {
  const [opacidade, setOpacidade] = useState(0);


  // Calcula a opacidade com base na posição de scroll da página:
  // - posicaoScroll / 1000: Aumenta a opacidade gradualmente conforme o scroll (0 a 1).
  // - Math.min(1, ...): Garante que a opacidade não ultrapasse 1, mesmo com scroll maior que 1000.
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
