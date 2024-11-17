import React, { useRef } from 'react';
import Titulo from '../Titulo/Titulo';
import "./Contato.css";
import InputForm from './InputForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import { toast, Toaster } from 'sonner';
import { useInView } from 'framer-motion';

export default function Contato() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [result, setResult] = React.useState("");
    const emailKey = import.meta.env.VITE_EMAIL;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", `${emailKey}`);
        
        const userEmail = formData.get("email");
        const userMessage = formData.get("message");

        // Primeiro envia para o Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("E-mail Enviado", { style: estiloToasty });
            event.target.reset();

            try {
                const sendEmailResponse = await fetch("/api/function-1", {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxNDkzMjA4MTIxMzcyMDM0NTkwIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJlYXNqdW5pb3IzQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImhkdHZJN3drTVRDNWRLX3d4NVhsQ0EiLCJuYmYiOjE3MzEzNjg3NjcsImlhdCI6MTczMTM2OTA2NywiZXhwIjoxNzMxMzcyNjY3LCJqdGkiOiI3N2JmNWU3Njk0NzU3ZGRlYjA0YWNmNzAxNTIxNTg0Nzc2OTk4ZjIxIn0.MQQdGmyyIC-vMve32Lbgj1Fyg5rz_1JuzpFF6WIW82f4ywAjbPbTwfRZHbYFq8YU-9fEXDJcyDGDHcN5qLo7BsfZS_EPh8c_iNkRjhnjFUTIEUjVbbYESugtFusb2Q1E77dDp-RH7mwdL1fpj1cinTGIOh7c_X-MIKlYJRtZ8rPCUvkklI8v9LtNlDP7WXwaP4uflST83LYOMg9oJgncK3ypHs2w8Xm6b2IsAmbqn3YJmXm6EKqVXwX7nemJDhcJoOlK5NMPfDjoMDMCJG17iybIm_Z6VdM4u4lFxbIBtdpu3nA-fb_TymEpSIUrgLA1PQJr0LYYU_i3ehdj9hepBg',
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        toMail: userEmail,
                        content: "Obrigado por entrar em contato! Vamos te responder o quanto antes."
                    })
                });

                if (!sendEmailResponse.ok) {
                    console.error("Erro ao enviar email automático de confirmação");
                    toast.error("Serviço de enviar e-mail de resposta está desativado, mas seu e-mail foi enviado");
                }
            } catch (error) {
                console.error("Erro na requisição à Google Cloud Function:", error);
            }
        } else {
            console.log("Error", data);
            toast.error("E-mail não enviado, ocorreu um erro");
            setResult(data.message);
        }
    };

    const estiloToasty = {
        color: "#ffff",
        border: "1px solid #8331EB",
        backgroundColor: "#1D1D1D",
        padding: "15px"
    };

    const clicaBotaoEmail = async () => {
        try {
            navigator.clipboard.writeText("sousekjuniorr@outlook.com");
            toast.info("E-mail copiado para a área de transferência", { style: estiloToasty });
        } catch (e) {
            console.log(e);
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
                    <textarea placeholder='Mensagem aqui' className='caixatexto' name='message' required />
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
                    <Toaster />
                    <button className='Contato-botaoemail' onClick={clicaBotaoEmail}>
                        <IoCopyOutline size={25} alt="Simbolo para copiar texto" /> Copie meu endereço de e-mail
                    </button>
                </div>
            </div>
        </div>
    );
}
