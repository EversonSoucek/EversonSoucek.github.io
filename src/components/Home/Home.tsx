import "./Home.css";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className='Home__conteudo'>
        <h1 className='Home__Nome'>I'm Everson Soucek</h1>
        <h2 className='Home__subtitulo'>Front-End</h2>
        <p className="Home__descricao">
          Engenheiro de Software focado em desenvolvimento web, com experiência em React e C#. 
        </p>
        <button className="Home__button Home__button--primary">Mais sobre Mim</button>
        <button className="Home__button Home__button--secondary">Me contate</button>

      </div>
    </div>
  );
};

export default Home;
