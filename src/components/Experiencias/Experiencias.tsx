import './Experiencias.css';
import siemens from "../../assets/img/siemens_logo 1.png";
import visual from "../../assets/img/VisualSoftwareLogo.png";
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Titulo from '../Titulo/Titulo';
import { useTranslation } from 'react-i18next';

export default function Experiencias() {
  const { t } = useTranslation(); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiencias = [{
    id: 1,
    empresa: "Visual Software",
    data: "Julho 2023 - Atual",
    cargo: t("experiences.qaAnalyst"), 
    descricao: t("experiences.qaDescription"), 
    imagem: visual
  },
  {
    id: 2,
    empresa: "Siemens Gamesa",
    data: "Junho 2024",
    cargo: t("experiences.frontendDeveloper"),
    descricao: t("experiences.contractSystem"), 
    imagem: siemens
  }
  ];

  return (
    <div className="experiencias" id='experiencias' ref={ref}>
      <div style={{ textAlign: 'center' }}>
        <SlideAnimation duration={0.75} isInView={isInView}>
          <FadeBottomAnimation isInView={isInView} duration={1}>
            <Titulo className="experiencias__titulo">{t("experiences.title")}</Titulo>
          </FadeBottomAnimation>
        </SlideAnimation>
      </div>

      {experiencias.map((experiencia) => (
        <FadeBottomAnimation isInView={isInView} key={experiencia.id}>
          <div className="experiencias__lista">
            <div className="experiencias__item">
              <div className="experiencias__logo">
                <img src={experiencia.imagem} alt={`Logo da ${experiencia.empresa}`} className="experiencias__logo-imagem" />
              </div>
              <div className="experiencias__conteudo">
                <h2 className="experiencias__empresa">{experiencia.empresa}</h2>
                <p className="experiencias__data">{experiencia.data}</p>
                <h3 className="experiencias__cargo">{experiencia.cargo}</h3>
                <p className="experiencias__descricao">{experiencia.descricao}</p>
              </div>
            </div>
          </div>
        </FadeBottomAnimation>
      ))}
    </div>
  );
}
