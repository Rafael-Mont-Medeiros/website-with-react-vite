import { Link } from "react-router-dom"
import style from "./Header.module.css"
import { useState } from "react"

export default function Header() {
    const[menuStart, setMenuStart] = useState(false)
    const toggleMenu = ()=>{
        setMenuStart(!menuStart)
    }
    return (
        <>
            <header className={`${style.headerContainer} ${menuStart ? style.active : ''}`}>
                <Link to="/" className={style.title}>RafaelMedeiros.dev</Link>

                <nav className={style.disable}>
                    <Link to="/">Home</Link>
                    <Link to="sobre">Sobre</Link>
                    <Link to="projetos">Projetos</Link>
                    <Link to="contatos">Contatos</Link>
                </nav>

                <div onClick={toggleMenu}  className={style.menuHamburguer}>
                    <span className={`${style.line} ${style.line1}`}></span>
                    <span className={`${style.line} ${style.line2}`}></span>
                    <span className={`${style.line} ${style.line3}`}></span>
                </div>
            </header>
        </>
    )
}