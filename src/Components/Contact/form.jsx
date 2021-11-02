import React from 'react'
import '../../Assets/Styles/contact.css'

export default function ContactForm() {

    return (
        <div className="form-section">
            <form>
            <h1 className="title-contact">Contato</h1>
                <div className="firstFormFragment">
                    <label className="title-mini">Nome</label>
                    <input className="FormFragment-input"></input>
                </div>
                <div className="secondFormFragment">
                    <label className="title-mini">Email</label>
                    <input className="FormFragment-input"></input>
                </div>
                <div className="thirdFormFragment">
                    <label className="title-mini">Sua mensagem</label>
                    <textarea className="FormFragment-textarea"></textarea>
                </div>
                <button className="FormFragment-button">Enviar</button>
            </form>
        </div>

    )
}