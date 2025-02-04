import style from "./Contatos.module.css"
import { GoMail } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { } from "react-icons/bs";

export default function () {
    return (
        <>
            <div className={style.container}>
                <h1>Contatos.</h1>
                <h3>Como prefere entrar em contato?</h3>

                <div className={style.contacts}>
                    <a
                        href="mailto:rafak1212@gmail.com"
                        target="_blanck"
                        rel="noopener noreferrer">
                        <GoMail className={style.icon} />
                    </a>

                    <a ><IoLogoInstagram className={style.icon} /></a>

                    <a
                        href="https://www.linkedin.com/in/rafael-medeiros-668651313/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FiLinkedin className={style.icon} />
                    </a>

                    <a
                        href="https://github.com/Rafael-Mont-Medeiros"
                        target="_blanck"
                        rel="noopenner noreferrer">
                        <FiGithub className={style.icon} />
                    </a>
                    
                </div>
            </div>
        </>
    )
}
