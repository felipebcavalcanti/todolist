import logo from "../assets/Clipboard.svg";
import style from "./Comments.module.css";

export function Comments() {
    return (
        <div className={style.content}>
            <div className={style.top}>
                <div className={style.start}>

                    <p>
                        Tarefas Criadas
                        <span>0</span>
                    </p>

                </div>
                <div className={style.end}>

                    <p>
                        Concluidas
                        <span>0</span>
                    </p>

                </div>
            </div>
            <footer className={style.bottom}>
                <img src={logo} alt="logo" />
                <p className={style.pOne}>Você ainda não tem tarefas cadastradas</p>
                <p className={style.pTwo}>Crie tarefas e organize seus itens a fazer</p>
            </footer>
        </div>

    )

}