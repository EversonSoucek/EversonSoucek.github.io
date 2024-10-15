import './Experiencias.css'
import es from "../../assets/img/ES Logo.png"
import siemens from "../../assets/img/siemens_logo 1.png"
import visual from "../../assets/img/VisualSoftwareLogo.png"
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation'
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Titulo from '../Titulo/Titulo'

export default function Experiencias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiencias = [{
    empresa: "Visual software",
    data: "Agosto 2023 - Atual",
    cargo: "Analista de Qualidade",
    descricao: "Atuando como analista de QA em um ERP de gestão empresarial, envolvido na realização de testes exploratórios criação de casos de testes e documentação de novas funcionalidades do software.",
    imagem: visual
  },
  {
    empresa: "Siemens Gamesa",
    data: "Junho 2024",
    cargo: "Desenvolvedor Front-end | Freelancer",
    descricao: "Desenvolvi um sistema para automatizar a geração de contratos no setor de vendas. Para mais detalhes, consulte a seção de projetos.",
    imagem: siemens
  }
  ]

  return (
    <div className="experiencias" id='experiencias' ref={ref}>
      <div style={{ textAlign: 'center' }}>
        <SlideAnimation duration={1} isInView={isInView}>
          <FadeBottomAnimation isInView={isInView} duration={1}>
            <Titulo>Experiências</Titulo>
          </FadeBottomAnimation>
        </SlideAnimation>
      </div>

      {experiencias.map((experiencia) => (
        <FadeBottomAnimation isInView={isInView}>
          <div className="experiencias__lista">
            <div className="experiencias__item">
              <div className="experiencias__logo">
                <img src={experiencia.imagem} alt="Logo da Visual Software" className="experiencias__logo-imagem" />
              </div>
              <div className="experiencias__conteudo">
                <h2 className="experiencias__empresa">{experiencia.empresa}</h2>
                <p className="experiencias__data">{experiencia.data}</p>
                <h3 className="experiencias__cargo">{experiencia.cargo}</h3>
                <p className="experiencias__descricao">
                  {experiencia.descricao}
                </p>
              </div>
            </div>
          </div>
        </FadeBottomAnimation>
      ))}


    </div>
  );

}