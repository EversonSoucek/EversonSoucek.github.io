import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Titulo from '../Titulo/Titulo';
import './Contato.css';
import InputForm from './InputForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import { toast, Toaster } from 'sonner';

export default function Contato() {
    const ref = useRef(null);
    const emailKey = import.meta.env.VITE_EMAIL;
    const { t } = useTranslation();

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", `${emailKey}`);

        //const userEmail = event.target.email.value;

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success(t("contact.emailSuccess"), { style: estiloToasty });
            event.target.reset();

        } else {
            console.error("Error", data);
            toast.error(t("contact.emailError"));
        }
    };

    const estiloToasty = {
        color: "#fff",
        border: "1px solid #8331EB",
        backgroundColor: "#1D1D1D",
        padding: "15px"
    };

    const clicaBotaoEmail = async () => {
        try {
            navigator.clipboard.writeText("sousekjuniorr@outlook.com");
            toast.info(t("contact.emailCopied"), { style: estiloToasty });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className='Contato' id='contato'>
            <Titulo>{t("contact.title")}</Titulo>
            <div className='Contato-container' ref={ref}>
                <form onSubmit={onSubmit} className='Contato-form'>
                    <h3 className='titulo-form'>{t("contact.formTitle")}</h3>
                    <InputForm placeholder={t("contact.formName")} nome="name" tipo="" />
                    <InputForm placeholder={t("contact.formEmail")} nome="email" tipo="" />
                    <textarea placeholder={t("contact.formMessage")} className='caixatexto' name='message' required />
                    <button type='submit' className='Contato-botao'>
                        {t("contact.formSendButton")}
                    </button>
                </form>
                <div className='Contatos'>
                    <a href="https://www.linkedin.com/in/everson-soucek-152984232/" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
                        <FaLinkedin size={80} color='#8331EB' />
                    </a>
                    <a href="https://github.com/EversonSoucek" target="_blank" rel="noopener noreferrer" className='header__social-icon'>
                        <FaGithub size={80} color='#8331EB' />
                    </a>
                    <Toaster />
                    <button className='Contato-botaoemail' onClick={clicaBotaoEmail}>
                        <IoCopyOutline size={25} /> {t("contact.emailButton")}
                    </button>
                </div>
            </div>
        </div>
    );
}
