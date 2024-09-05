import React from 'react';
import logo from "../../assets/img/ES Logo.png";
import "./Header.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='header'>
        <img src={logo} alt='Logo que parece ter a semelhança da letra E e A' className="header__logo" />
      <nav>
        <ul className='header__list'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="header__icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="header__icon" />
        </a>
      </div>
    </header>
  );
}
