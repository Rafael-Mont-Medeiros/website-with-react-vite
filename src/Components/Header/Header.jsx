import { Link } from "react-router-dom"
import style from "./Header.module.css"
import { useState } from "react"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={`${style.headerContainer}`}>
            <Link
                to="/" className={style.title}>
                RafaelMedeiros.dev
            </Link>

            <nav
                className={`{${style.menuHamburguer} ${showMenu ? style.show : style.menuHamburguer}`}
            >
                <Link to="/">Home</Link>
                <Link to="sobre">Sobre</Link>
                <Link to="projetos">Projetos</Link>
                <Link to="contatos">Contatos</Link>
            </nav>

            <div
                onClick={toggleMenu}
                className={`${style.menu} ${showMenu ? style.active : ""}`}
            >
                <span className={`${style.line} ${style.line1}`}></span>
                <span className={`${style.line} ${style.line2}`}></span>
                <span className={`${style.line} ${style.line3}`}></span>
            </div>
        </header>

    )
}