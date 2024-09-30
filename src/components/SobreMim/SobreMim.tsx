import { useRef } from 'react';
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';
import './SobreMim.css';
import { useInView } from 'framer-motion';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';

export default function SobreMim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="sobreMim" id='sobre' ref={ref}>
      <SlideAnimation isInView={isInView}>
        <FadeBottomAnimation isInView={isInView}>
          <h1 className="sobreMim__Titulo">Sobre Mim</h1>
        </FadeBottomAnimation>
      </SlideAnimation>
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
    </div>
  );
}
