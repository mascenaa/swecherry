import React from 'react'

import '../../Assets/Styles/gallery.css'
import Box from '../Box/boxGallery'



export default function Gallery() {

    return (

    <>
        <section className="gallery-body">
            <h1 className="gallery-title">Galeria</h1>
        
                <div className="gallery-options">
                    <button className="gallery-options--button active">Bolos Tradicionais</button>
                    <button className="gallery-options--button">Bolos Personalizados</button>
                    <button className="gallery-options--button">Outros Doces</button>
                </div>

            <section className="columns">
                <div className="column1">
                    <Box />
                    <Box />
                    <Box />
                </div>
                <div className="column2">
                    <Box />
                    <Box />
                    <Box />
                </div>
                
                <div className="column3">
                    <Box />
                    <Box />
                    <Box />
                </div>
            </section>
        </section>
    </>
    )
}