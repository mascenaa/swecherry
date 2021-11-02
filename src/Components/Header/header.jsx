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
               <li className="header-nav--item"><a href="https://google.com/">Home</a></li>
               <li className="header-nav--item"><a href="https://google.com/">Catalogo</a></li>
               <li className="header-nav--item"><a href="https://google.com/">Contato</a></li>
           </ul>
           </div>
        </div>
    </>
    )
}

