import { Trash } from "phosphor-react"
import style from "./NewTask.module.css"




export function NewTask(props: any) {
    return (
        <div className={style.post}>

            <input id='checkboxId' 
                className={style.input} 
                type="checkbox" />
            
            <label htmlFor="checkboxId" />

            <p>{props.content}</p>
            <Trash size={21}/>

        </div>
    )
}