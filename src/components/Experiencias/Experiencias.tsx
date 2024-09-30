import './Experiencias.css'
import visual from "../../assets/img/VisualSoftwareLogo.png"
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation'
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation'
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Experiencias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="experiencias" id='experiencias' ref={ref}>
      <SlideAnimation isInView={isInView}>
        <FadeBottomAnimation isInView={isInView}>
          <h1 className="experiencias__titulo">Experiências</h1>
        </FadeBottomAnimation>
      </SlideAnimation>

      <div className="experiencias__lista">
        <div className="experiencias__item">
          <div className="experiencias__logo">
            <img src={visual} alt="Logo da Visual Software" className="experiencias__logo-imagem" />
          </div>
          <div className="experiencias__conteudo">
            <h2 className="experiencias__empresa">Visual Software</h2>
            <p className="experiencias__data">Agosto 2023</p>
            <h3 className="experiencias__cargo">Garantia de Qualidade</h3>
            <p className="experiencias__descricao">
              Atuando como analista de QA em um ERP de gestão empresarial, envolvido na realização de testes exploratórios criação de casos de testes e documentação de novas funcionalidades do software.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}