import style from "./Sobre.module.css"
import html from "./Images/icon-html.svg"
import css from "./Images/icon-css.svg"
import js from "./Images/icon-js.svg"
import react from "./Images/icon-react.svg"
import photo from "./Images/photo-rafael.png"

export default function Sobre() {
    return (
        <>

            <div className={style.container}>
                <section className={style.content}>

                    <figure>
                        <img src={photo} alt="" />
                    </figure>

                    <div className={style.description}>
                        <h3>sobre</h3>
                        <p>
                            Sou <span className={style.name}>Rafael Medeiros</span><br />
                            <span className={style.atuaction}>
                                Dev front-end
                            </span>
                        </p>
                        <p>
                            Atualmente estou estudando desevolvimento web, focado no front-end.
                        </p>

                    </div>
                </section>

                <div className={style.skills}>
                    <h2>skills</h2>

                    <div className={style.icons}>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    </div>
                </div>
            </div>

        </>

    )
}