import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; 
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";
import logo from "../../assets/img/ES Logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [opacidade, setOpacidade] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
    const controlaOpacidadeAoScrollar = () => {
      const posicaoScroll = window.scrollY;
      const novaOpacidade = Math.min(1, posicaoScroll / 1000);
      setOpacidade(novaOpacidade);
    };

    window.addEventListener("scroll", controlaOpacidadeAoScrollar);

    return () => {
      window.removeEventListener("scroll", controlaOpacidadeAoScrollar);
    };
  }, []);

  useEffect(() => {
    const verificaDispositivo = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    verificaDispositivo(); 
    window.addEventListener("resize", verificaDispositivo);

    return () => {
      window.removeEventListener("resize", verificaDispositivo);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className="header"
      style={{ backgroundColor: `rgba(21, 21, 21, ${opacidade})` }}
    >
      <nav className="header__nav">
        {/* Exibe os links apenas em dispositivos não móveis */}
        {!isMobile && (
          <ul className="header__list">
            <li>
              <img
                src={logo}
                alt="Logo"
                className="header__logo"
              />
            </li>
            <li>
              <a href="#home" className="header__list-link">
                {t("header.home")}
              </a>
            </li>
            <li>
              <a href="#sobre" className="header__list-link">
                {t("header.aboutMe")}
              </a>
            </li>
            <li>
              <a href="#skills" className="header__list-link">
                {t("header.skills")}
              </a>
            </li>
            <li>
              <a href="#experiencias" className="header__list-link">
                {t("header.experiences")}
              </a>
            </li>
            <li>
              <a href="#projetos" className="header__list-link">
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a href="#contato" className="header__list-link">
                {t("header.contact")}
              </a>
            </li>
          </ul>
        )}
        
        {/* Exibe os ícones sociais apenas em dispositivos não móveis */}
        {!isMobile && (
          <div className="header__social">
            <a
              href="https://github.com/EversonSoucek"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-icon"
            >
              <FaGithub className="header__icon" size={40} color="#8331EB" />
            </a>
            <a
              href="https://www.linkedin.com/in/everson-soucek-152984232/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-icon"
            >
              <FaLinkedin className="header__icon" size={40} color="#8331EB" />
            </a>
          </div>
        )}

        {/* Sempre exibe as bandeiras de idioma */}
        <div className="header__languages">
          <button
            className="header__language-button"
            onClick={() => changeLanguage("en")}
          >
            <LiaFlagUsaSolid color="#ffff" size={30} />
          </button>
          <button
            className="header__language-button"
            onClick={() => changeLanguage("pt")}
          >
            <GiBrazilFlag color="#ffff" size={30} />
          </button>
        </div>
      </nav>
    </header>
  );
}
