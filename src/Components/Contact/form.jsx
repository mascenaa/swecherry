import React from 'react'

import '../../Assets/Styles/contact.css'

export default function ContactForm() {

    return (
        <div id="contato" className="form-section">
            <form>
            <h1 className="title-contact">Contato</h1>
                <div className="firstFormFragment">
                    <label className="title-mini">Nome</label>
                    <input 
                    placeholder="Seu nome completo"
                    className="FormFragment-input"></input>
                </div>
                <div className="secondFormFragment">
                    <label className="title-mini">Email</label>
                    <input   
                    placeholder="exemplo@exemplo.com"
                    className="FormFragment-input"></input>
                </div>
                <div className="thirdFormFragment">
                    <label className="title-mini">Sua Mensagem</label>
                    
                    <textarea className="FormFragment-textarea"
                    placeholder="Seu Pedido"></textarea>
                </div>
                <button className="FormFragment-button">Enviar</button>
            </form>
        </div>

    )
}