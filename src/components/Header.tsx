import style from "./Header.module.css";
import logo from "../assets/Logo.svg";
import { CheckSquare } from "phosphor-react";

export function Header() {
    return (
       <div>
        <header className={style.header}>
            <img src={logo} alt="logo" />
        </header>
      
        <form className={style.form}>
            <input type="text" className={style.input} placeholder="Adicione uma nova tarefa" />
            <button className={style.button}>
                Criar 
                <CheckSquare size={20}/>
            </button> 
        </form>
       </div>
         
    )

}