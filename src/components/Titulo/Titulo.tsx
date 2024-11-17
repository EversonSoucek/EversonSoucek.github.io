import "./Titulo.css";

// Define o tipo das props para o componente
interface TituloProps {
  children: React.ReactNode;  // Define que 'children' pode ser qualquer conteúdo JSX
  className?: string;  // Permite a propriedade 'className' opcionalmente
}

export default function Titulo({children, className}: TituloProps) {
  return (
    <h1 className={`titulo ${className}`}>{children}</h1>
  );
}
