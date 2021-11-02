import React from 'react'
import '../../Assets/Styles/header.css'


export default function Header() {
    return (
    <>
        <div className="header">
            <div class="header-body">
                <h1 className="header-logo">Swecherry</h1>
            </div>
        <div className="header-nav">
           <ul className="header-nav--list">
               <li className="header-nav--item"><a href="#home">Home</a></li>
               <li classN ame="header-nav--item g"><a href="#galeria">Galeria</a></li>
               <li className="header-nav--item"><a href="#contato">Contato</a></li>
           </ul>
           </div>
        </div>
    </>
    )
}

