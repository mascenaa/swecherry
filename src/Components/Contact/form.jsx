import React from 'react'

import '../../Assets/Styles/contact.css'

export default function ContactForm() {

    return (
        <div id="contato" className="form-section">
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("Seu evento foi enviado com sucesso")
            }}>
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
                    type="email"
                    placeholder="exemplo@exemplo.com"
                    className="FormFragment-input"></input>
                </div>
                <div className="thirdFormFragment">
                    <label className="title-mini">Sua Mensagem</label>
                    
                    <textarea className="FormFragment-textarea"
                    placeholder="Escreva seu pedido aqui!"></textarea>
                </div>
                <button 
                type="submit"
                className="FormFragment-button">Enviar</button>
            </form>
            <section className="contacts">
                <h2>11 9999-333</h2>
                <h2>Rua Lorem Impusem, número 402</h2>
            </section>
        </div>

    )
}