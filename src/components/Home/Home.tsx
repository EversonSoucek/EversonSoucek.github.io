import { useRef } from "react";
import { useInView } from "framer-motion";
import SlideAnimation from "../Animations/SlideAnimation/SlideAnimation";
import FadeBottomAnimation from "../Animations/FadeBottomAnimation/FadeBottomAnimation";
import FadeLeftAnimation from "../Animations/FadeLeftAnimation/FadeLeftAnimation";
import "./Home.css";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="Home" id="home">
      <div ref={ref} className="Home__conteudo">
        <SlideAnimation isInView={isInView}>
          <FadeBottomAnimation isInView={isInView}>
            <h1 className="Home__Nome">I'm Everson Soucek</h1>
          </FadeBottomAnimation>
        </SlideAnimation>

        <FadeLeftAnimation isInView={isInView}>
          <h2 className="Home__subtitulo">Front-end</h2>
          <p className="Home__descricao">
            Engenheiro de Software focado em desenvolvimento web, com experiência
            em React e C#.
          </p>
        </FadeLeftAnimation>
        <FadeBottomAnimation isInView={isInView}>
          <div>
            <button className="Home__button Home__button--primary">Mais sobre Mim</button>
            <button className="Home__button Home__button--secondary">Me contate</button>
          </div>
        </FadeBottomAnimation>
      </div>
    </div>
  );
};

export default Home;
