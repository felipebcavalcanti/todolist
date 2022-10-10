import { Trash } from "phosphor-react"
import style from "./Post.module.css"

export function Post() {
    return (
        <div className={style.post}>

            <input className={style.checkmark} type="checkbox" />
            <p> simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's.</p>
            <Trash size={21}/>

        </div>
    )
}