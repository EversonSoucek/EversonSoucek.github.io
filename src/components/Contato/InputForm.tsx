import "./InputForm.css"

export default function InputForm({ placeholder, tipo,nome }) {
    return (
        <input placeholder={placeholder} className={`input ${tipo}`} name={nome} required />
    )
}
