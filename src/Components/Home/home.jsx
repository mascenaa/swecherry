import React from 'react'

import '../../Assets/Styles/home.css'

export default function Home() {

    function authHora() {
        const data = new Date();
        const hora = data.getHours();
        
        if(hora <= 12) {
            return(
                <p>Bom dia!</p>
            )
        };
        if(hora <= 17) {
            return(
                <p>Bom tarde!</p>
            )
        };
        if(hora >= 18) {
            return(
                <p>Boa noite!</p>
            )
        }
    }

    return (
    <section className="home-body">
        <div className="home-gallery">
        <h1 className="home-title">{authHora()}</h1>
            <p className="home-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id quo, velit mollitia fugit harum minima culpa illo qui corporis, at hic, nesciunt molestias consequatur blanditiis debitis. Eaque, minus tempora.</p>
        </div>
        <div className="polaroid">
            <div id="picture1" className="box">
                <h2>GURIZAO</h2>
            </div>
            <div id="picture2" className="box">
                <h2>GURIZAO</h2>
            </div>
            <div id="picture3" className="box">
                <h2>GURIZAO</h2>
            </div>
            <div id="picture4" className="box">
                <h2>GURIZAO</h2>
            </div>
        </div>

    </section>
    )
}