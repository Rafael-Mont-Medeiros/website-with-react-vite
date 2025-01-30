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
            <div className={style.container}>
                {
                    <section className={style.content}>
                        {
                            repositories.map((repo) => {
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            })
                        }
                    </section>
                }
            </div>
        </>
    )
}