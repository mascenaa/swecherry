import React from 'react'

import '../../Assets/Styles/home.css'
import '../../Assets/GlobalStyles/global.css'
import 'animate.css'


export default function Home() {

    function authHora() {
        const data = new Date();
        const hora = data.getHours();
        
        if(hora <= 12) {
            return(
                <p className="animate__animated animate__zoomIn">Bom dia!</p>
            )
        };
        if(hora <= 17) {
            return(
                <p className="animate__animated animate__zoomIn">Bom tarde!</p>
            )
        };
        if(hora >= 18) {
            return(
                <p className="animate__animated animate__zoomIn">Boa noite!</p>
            )
        }
    }

    return (
    <section id="home" className="home-body">
        <div className="home-gallery">
        <h1 className="title">{authHora()}</h1>
            <p className="animate__animated animate__zoomIn paragraph home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id quo, velit mollitia fugit harum minima culpa illo qui corporis, at hic, nesciunt molestias consequatur blanditiis debitis. Eaque, minus tempora.</p>
        </div>
        <div className="polaroid">
            <div id="picture1" className="animate_animated animate__backInDown box">
            </div>
            <div id="picture2" className="box">
            </div>
            <div id="picture3" className="box">
            </div>
            <div id="picture4" className="box">
            </div>
        </div>

    </section>
    )
}