import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importar o hook useTranslation
import SlideAnimation from "../Animations/SlideAnimation/SlideAnimation";
import FadeBottomAnimation from "../Animations/FadeBottomAnimation/FadeBottomAnimation";
import FadeLeftAnimation from "../Animations/FadeLeftAnimation/FadeLeftAnimation";
import "./Home.css";
import Button from "../Button/Button";

const Home = () => {
  const { t } = useTranslation(); // Acessa a função de tradução
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="Home" id="home">
      <div ref={ref} className="Home__conteudo">
        <SlideAnimation isInView={isInView} duration={1}>
          <FadeBottomAnimation isInView={isInView} duration={1}>
            <h1 className="Home__Nome">{t("home.title")}</h1> {/* Usando chave de tradução */}
          </FadeBottomAnimation>
        </SlideAnimation>

        <FadeLeftAnimation isInView={isInView}>
          <h2 className="Home__subtitulo">{t("home.subtitle")}</h2> {/* Usando chave de tradução */}
          <p className="Home__descricao">{t("home.description")}</p> {/* Usando chave de tradução */}
        </FadeLeftAnimation>

        <FadeBottomAnimation isInView={isInView}>
          <div>
            <Button href="#sobre" className="button--primary">
              {t("home.moreAboutMe")} {/* Usando chave de tradução */}
            </Button>
            <Button href="#contato" className="button--secondary">
              {t("home.contactMe")} {/* Usando chave de tradução */}
            </Button>
          </div>
        </FadeBottomAnimation>
      </div>
    </div>
  );
};

export default Home;
