import './Button.css';

const Button = ({ href, children, className }) => {
  return (
    <a href={href} className={`button ${className}`}>
      {children}
    </a>
  );
};

export default Button;
