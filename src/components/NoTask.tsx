
import logo from "../assets/Clipboard.svg";

import style from "./NoTask.module.css";


export function NoTask() {
    return (
        <div className={style.empty}>
            <img src={logo} alt="logo" />
            <p className={style.pOne}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}