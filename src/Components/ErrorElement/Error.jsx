import style from "./Error.module.css"

export default function Error() {
    return (
        <>
            <div className={style.container}>
                <p>Algo deu errado.</p>
                <span className={style.pink}>404</span>
                <p className={style.pink}>Página não encontrada!</p>
            </div>
        </>
    )
}