import { Link } from "react-router-dom"
import style from "./Header.module.css"

export default function Header() {
    return (
        <>
            <header className={style.headerContainer}>
                <Link to="/" className={style.title}>RafaelMedeiros.dev</Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="sobre">Sobre</Link>
                    <Link>Projetos</Link>
                    <Link>Contatos</Link>
                </nav>
            </header>
        </>
    )
}