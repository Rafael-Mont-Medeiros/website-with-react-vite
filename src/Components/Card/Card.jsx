import style from './Card.module.css'
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs } from "react-icons/bs";
import { FaReact, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Card({name, description, html_url}) {
    return (
        <>
            <div className={style.container}>
                <h1>{name}</h1>
                <p>{description}</p>

                <div className={style.footer}>
                    <div className={style.icons}>
                        <BsFiletypeHtml className={style.icon} />
                        <BsFiletypeCss className={style.icon} />
                        <BsFiletypeJs className={style.icon} />
                        <FaReact className={style.icon} />
                    </div>
                    <Link to={html_url}> <FaArrowRight /> </Link>
                </div>

            </div>
        </>
    )
}