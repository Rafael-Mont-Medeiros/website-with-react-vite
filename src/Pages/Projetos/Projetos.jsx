import { useState, useEffect } from "react"
import Card from "../../Components/Card/Card"
import style from "./Projetos.module.css"

export default function Projetos() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const searchRepositories = async () => {
            const response = await fetch('https://api.github.com/users/Rafael-Mont-Medeiros/repos')
            const data = await response.json()
            setRepositories(data)
        }
        searchRepositories()
    }, [])

    return (
        <>
            <section className={style.container}>

                {
                    repositories.length > 0 ? (
                        <section className={style.content}>
                            {
                                repositories.map((rep) => (
                                    <Card
                                            key={rep.id}
                                            name={rep.name}
                                            description={rep.description}
                                            html_url={rep.html_url}
                                        /> 
                                ))
                            }
                        </section>
                    ) : (
                        <p>carregando repositorios...</p>
                    )
                }
            </section>
        </>
    )
}