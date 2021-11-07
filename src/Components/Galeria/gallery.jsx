import React, {useState} from 'react'

import '../../Assets/Styles/gallery.css'
import '../../Assets/GlobalStyles/global.css'
import DefaultCakes from './slides/defaultCakes'
import CustomCakes from './slides/customCakes'
import Candy from './slides/defaultCandys'


export default function Gallery() {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const defaultCakes = 0
    const customCakes = 1
    const candys = 2

    function GaleriaAtual(etapa) {
        switch(etapa) {
            case defaultCakes:
                return <DefaultCakes />
            case customCakes:
                return <CustomCakes />
            case candys: 
                return <Candy />

            default:
                console.error("A lista de produtos não foi devidamente carregada, tente novamente em instantes...")
        }
    }

    return (
    <>
        <section id="galeria" className="gallery-body">
            <h1 className="title gallery">Galeria</h1>
        
                <div className="gallery-options">
                    <button 
                        onClick={() => {
                            setEtapaAtual(defaultCakes)
                        }}
                    className="gallery-options--button">Bolos Tradicionais</button>
                    
                    <button 
                        onClick={() => {
                            setEtapaAtual(customCakes)
                        }}
                    className="gallery-options--button">Bolos Personalizados</button>
                    <button 
                        onClick={() => {
                            setEtapaAtual(candys)
                        }}
                    className="gallery-options--button">Outros Doces</button>
                </div>
            <section>
                {GaleriaAtual(etapaAtual)}
            </section>
        </section>
    </>
    )
}

//