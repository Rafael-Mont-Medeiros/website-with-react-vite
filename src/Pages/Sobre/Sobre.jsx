import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import style from "./Sobre.module.css"

export default function Sobre() {
    return (
        <>
            
            <section className={style.content}>

                <figure>
                    <img src="/photo-rafael.jpg" alt="" />
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
            
        </>

    )
}