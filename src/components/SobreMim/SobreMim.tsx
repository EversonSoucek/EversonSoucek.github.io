import { useRef } from 'react';
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';

import './SobreMim.css';
import { useInView } from 'framer-motion';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';
import FadeLeftAnimation from '../Animations/FadeLeftAnimation/FadeLeftAnimation';
import Titulo from '../Titulo/Titulo';

export default function SobreMim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div className="sobreMim" id='sobre' ref={ref}>
      <SlideAnimation isInView={isInView} duration={0.75}>
        <FadeBottomAnimation isInView={isInView} duration={1}>
          <Titulo>Sobre Mim</Titulo>
        </FadeBottomAnimation>
      </SlideAnimation>
      <FadeLeftAnimation isInView={isInView}>
        <div className="sobreMim__conteudo">
          <div className="sobreMim__secao">
            <h2 className="sobreMim__secao-titulo">Trabalho</h2>
            <p className="sobreMim__secao-texto">
              Estudante de engenharia de software no 6° período, atuando como analista de QA em um ERP de gestão empresarial, envolvido na realização de testes exploratórios e documentação de novas funcionalidades do software.
            </p>
          </div>
          <div className="sobreMim__secao">
            <h2 className="sobreMim__secao-titulo">Estudos</h2>
            <p className="sobreMim__secao-texto">
              Interesses em testes automatizados com Robot Framework em Python. e desenvolvimento Fullstack com MERN Stack
            </p>
          </div>
        </div>
      </FadeLeftAnimation>
    </div>
  );
}
