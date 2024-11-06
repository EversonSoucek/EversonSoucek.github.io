import React from 'react'
import "./InputForm.css"

export default function InputForm({ placeholder, tipo,nome }) {
    return (
        <input placeholder={placeholder} className={`input ${tipo}`} name={nome} />
    )
}
