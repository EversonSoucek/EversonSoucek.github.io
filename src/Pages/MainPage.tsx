import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import './MainPage.css';
import SobreMim from '../components/SobreMim/SobreMim';
import Experiencias from '../components/Experiencias/Experiencias';
import Projetos from '../components/Projetos/Projetos';
import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';

export default function MainPage() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Home />
      </div>
      <SobreMim />
      <Skills/>
      <Experiencias />
      <Projetos />
      <Contato />
      <Footer />
    </>

  );
}
