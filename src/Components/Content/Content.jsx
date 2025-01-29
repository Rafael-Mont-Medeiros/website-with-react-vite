import style from "./Content.module.css"
import { Link } from "react-router-dom"

export default function Content() {
    return (
        <>
            <section className={style.content}>
                <div>
                    <p> Olá, meu nome é <br />
                        <span>Rafael Medeiros</span><br />
                        Dev front-end
                    </p><br /><br />

                    <Link to="/sobre">Saiba mais sobre mim.</Link>
                </div>

                <figure >
                    <img src="/developer-blue.svg" alt="" />
                </figure>
            </section>
        </>
    )
}