import React from 'react'
import Titulo from '../Titulo/Titulo'
import "./Projetos.css"
import siemens from "../../assets/img/siemens_logo 1.png"

export default function Projetos() {

    const projetos = [{
        titulo: "Gerador de contrato",
        data: "ago-2024",
        img: siemens,
        texto: "I developed an automated system for contract generation in the sales department at Siemens Gamesa, replacing a manual process. The solution generates customized PDF contracts, automatically adapting information such as address, date, and currency type for different clients. The system also includes rigorous validations to ensure data accuracy.",
        habilidades: "React.js and PDF"
    }]

    return (
        <div className='Projetos'>
            <Titulo>Projetos</Titulo>
            {projetos.map((projeto, index) => (
                <div key={index} className='Projetos__item'>
                    <div className='Projetos__container'>
                        <div className='Projetos__container-header'>
                            <div>
                                <img alt='logo siemens' src={projeto.img} />
                            </div>
                            <div className='Projetos__container-projeto'>
                                <h3 className='Projetos__container-titulo'>{projeto.titulo}</h3>
                                <p className='Projetos__container-data'>{projeto.data}</p>
                            </div>
                        </div>

                        <div className='Projetos__container-texto'>
                            {projeto.texto}
                        </div>
                    </div>
                    <div className='Projetos__container-tecnologias'>
                        <button className='botao__tecnologias'>{projeto.habilidades}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
