import React from 'react';
import logo from "../../assets/img/ES Logo.png";
import "./Header.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li><img src={logo} alt='Logo que parece ter a semelhança da letra E e A' className="header__logo" /></li>
          <li><a href="#home" className='header__list-link'>Home</a></li>
          <li><a href="#about" className='header__list-link'>About</a></li>
          <li><a href="#skills" className='header__list-link'>Skills</a></li>
          <li><a href="#experiences" className='header__list-link'>Experiences</a></li>
          <li><a href="#projects" className='header__list-link'>Projects</a></li>
          <li><a href="#contact" className='header__list-link'>Contact</a></li>
        </ul>
        <div className='header__social'>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaGithub className="header__icon" size={40} color='#8331EB' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
            <FaLinkedin className="header__icon" size={40} color='#8331EB' />
          </a>
        </div>
      </nav>
    </header>
  );
}
