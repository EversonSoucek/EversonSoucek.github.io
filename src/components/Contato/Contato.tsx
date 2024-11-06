import React, { useRef } from 'react';
import Titulo from '../Titulo/Titulo';
import "./Contato.css";
import InputForm from './InputForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import FadeBottomAnimation from '../Animations/FadeBottomAnimation/FadeBottomAnimation';
import { useInView } from 'framer-motion';
import SlideAnimation from '../Animations/SlideAnimation/SlideAnimation';

export default function Contato() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [result, setResult] = React.useState("");
    const emailKey = import.meta.env.VITE_EMAIL

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", `${emailKey}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div className='Contato' id='contato'>
            <Titulo>Me contate</Titulo>
            <div className='Contato-container' ref={ref}>
                <form onSubmit={onSubmit} className='Contato-form'>
                    <h3 className='titulo-form'>Entre em contato</h3>
                    <InputForm placeholder="Nome" nome="name" />
                    <InputForm placeholder="Email" nome="email" />
                    <textarea placeholder='Mensagem aqui' className='caixatexto' name='message' />
                    <button type='submit' className='Contato-botao'>
                        Enviar
                    </button>
                </form>
                <div className='Contatos'>
                    <a href="https://www.linkedin.com/in/everson-soucek-152984232/" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
                        <FaLinkedin size={80} color='#8331EB' alt="Logo do linkedin" />
                    </a>
                    <a href="https://github.com/EversonSoucek" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
                        <FaGithub size={80} color='#8331EB' alt="Logo do github" />
                    </a>
                    <button className='Contato-botaoemail'>
                        <IoCopyOutline size={25} alt="Simbolo para copiar texto" /> Copie meu endereço de e-mail
                    </button>
                </div>
            </div>
        </div>
    );
}
