import React from 'react'

import '../../../Assets/Styles/gallery.css'
import Box from '../../Box/box.jsx'


export default function customCakes() {

    return (
        <section className="columns">
        <div className="animate__animated animate__bounceIn column1">
            <Box />
            <Box />
            <Box />
        </div>
        <div className="animate__animated animate__bounceIn column2">
            <Box />
            <Box />
            <Box />
        </div>
        
        <div className="animate__animated animate__bounceIn column3">
        </div>
    </section>
    )   
}