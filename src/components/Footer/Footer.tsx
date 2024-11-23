import { useTranslation } from 'react-i18next';
import "./Footer.css";

export default function Footer() {
    const { t } = useTranslation();  // Acessa a função de tradução

    return (
        <footer className='rodape'>
            {t('footer.copyright')}
        </footer>
    );
}
