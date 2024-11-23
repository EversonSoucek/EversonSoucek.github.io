import { useRef } from 'react';
import { useInView } from 'framer-motion';
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';
import FadeLeftAnimation from '../Animations/FadeLeftAnimation/FadeLeftAnimation';
import Titulo from '../Titulo/Titulo';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import './SobreMim.css';

export default function SobreMim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <div className="sobreMim" id='sobre' ref={ref}>
      <SlideAnimation isInView={isInView} duration={0.75}>
        <FadeBottomAnimation isInView={isInView} duration={1}>
          <Titulo>{t('aboutMe.title')}</Titulo> {/* Traduzir o título "Sobre Mim" */}
        </FadeBottomAnimation>
      </SlideAnimation>
      <FadeLeftAnimation isInView={isInView}>
        <div className="sobreMim__conteudo">
          <div className="sobreMim__secao">
            <h2 className="sobreMim__secao-titulo">{t('aboutMe.workTitle')}</h2> {/* Traduzir o título da seção Trabalho */}
            <p className="sobreMim__secao-texto">
              {t('aboutMe.workDescription')} {/* Traduzir a descrição do trabalho */}
            </p>
          </div>
          <div className="sobreMim__secao">
            <h2 className="sobreMim__secao-titulo">{t('aboutMe.studyTitle')}</h2> {/* Traduzir o título da seção Estudos */}
            <p className="sobreMim__secao-texto">
              {t('aboutMe.studyDescription')} {/* Traduzir a descrição dos estudos */}
            </p>
          </div>
        </div>
      </FadeLeftAnimation>
    </div>
  );
}
