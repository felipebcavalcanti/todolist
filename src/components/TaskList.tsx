
import style from "./TaskList.module.css";
import { Trash } from "phosphor-react";
import { NoTask } from "./NoTask";

interface AppProps {
    content: string;
    isCompleted: boolean;
}

export function TaskList({ content, onDeleteComment }: any) {
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={style.container}>
           <div className={style.content}>
                <input 
                    id="checkboxId" 
                    type="checkbox" 
                />

                <p>{content}</p>
           </div>
            <button onClick={handleDeleteComment} className={style.icon}>
                <Trash size={20} />
            </button>

          
        </div>
    )
}