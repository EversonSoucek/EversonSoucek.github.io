import React, { useRef, useState } from 'react';
import Titulo from '../Titulo/Titulo';
import './Projetos.css';
import siemens from '../../assets/img/siemens_logo 1.png';
import { FaReact } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';
import { MdOutlineQuestionMark } from 'react-icons/md';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';
import { useInView } from 'framer-motion';
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';
import FadeLeftAnimation from '../Animations/FadeLeftAnimation/FadeLeftAnimation';

export default function Projetos() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    function mudaProjeto(valor) {
        if (count + valor <= 1 && count + valor >= 0) {
            setCount(count + valor);
        }
    }

    const projetos = [{
        id: 1,
        titulo: "Gerador de contrato",
        data: "ago-2024",
        img: siemens,
        texto: "Eu desenvolvi um sistema automatizado para geração de contratos no departamento de vendas da Siemens Gamesa, substituindo um processo manual. A solução gera contratos PDF personalizados, adaptando automaticamente informações como endereço, data e tipo de moeda para diferentes clientes. O sistema também inclui validações rigorosas para garantir a precisão dos dados.",
        habilidades: "React.js",
        logo: <FaReact color='#61DBFB' size={30} />
    },
    {
        id: 2,
        titulo: "Em Breve",
        data: "2024",
        img: null,
        texto: "Mais projetos estão em construção",
        habilidades: "Em Construção",
        logo: <MdOutlineQuestionMark />
    }];

    return (
        <div className='Projetos' ref={ref} id='projetos'>
            <SlideAnimation isInView={isInView} duration={0.75}>
                <FadeBottomAnimation isInView={isInView} duration={1} >
                    <Titulo>Projetos</Titulo>
                </FadeBottomAnimation>
            </SlideAnimation>
            <FadeLeftAnimation isInView={isInView}>
                <div className='Projetos__item'>
                    <div className='Projetos__container'>
                        <div className='Projetos__container-header'>
                            <div>
                                {projetos[count].img ? (
                                    <img src={projetos[count].img} alt={projetos[count].titulo} />
                                ) : (
                                    <MdOutlineQuestionMark size={50} color="#bcbcbc" />
                                )}
                            </div>
                            <div className='Projetos__container-projeto'>
                                <h3 className='Projetos__container-titulo'>{projetos[count].titulo}</h3>
                                <p className='Projetos__container-data'>{projetos[count].data}</p>
                            </div>
                        </div>

                        <div className='Projetos__container-texto'>
                            {projetos[count].texto}
                        </div>
                    </div>

                    <div className='Projetos__container-tecnologias'>
                        <div className='botao__tecnologias'>{projetos[count].logo}{`${projetos[count].habilidades}`}</div>
                        <div className='setas'>
                            <IoIosArrowDropleft color='white' size={30} cursor="pointer" onClick={() => mudaProjeto(-1)} />
                            <IoIosArrowDropright color='white' size={30} cursor="pointer" onClick={() => mudaProjeto(+1)} />
                        </div>
                    </div>
                </div>
            </FadeLeftAnimation>
        </div>
    );
}
