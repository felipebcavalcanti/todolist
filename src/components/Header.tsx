import style from "./Header.module.css";
import logo from "../assets/Logo.svg";
import { CheckSquare } from "phosphor-react";
import { useState } from "react";
import { TaskList } from "./TaskList";



export function Header() {

  
   const [comment, setComment] = useState(["Post Muito Bacana"]);
   const [NewCommentText, setNewCommentText] = useState("")

   function handleCreateNewComment() {
    event?.preventDefault();    

    setComment([...comment, NewCommentText]);

    setNewCommentText('');  

   }

   function handleNewCommentChange() {
        setNewCommentText(event?.target.value)
   }

   function deleteComment(commentDeleted) {
        const commentDeleteOne = comment.filter(comments => {
            return comments !== commentDeleted;
        })

        setComment(commentDeleteOne);
   }

    return (
       <div>
        <header className={style.header}>
            <img src={logo} alt="logo" />
        </header>
      
        <form onSubmit={handleCreateNewComment} className={style.form}>

            <input 
                type="text" 
                className={style.input} 
                placeholder="Adicione uma nova tarefa" 
                onChange={handleNewCommentChange}
                value={NewCommentText}
             
            />

            <button 
                className={style.button}>
                Criar 
                <CheckSquare size={20}/>
            </button> 
            
        </form>

        <div className={style.names}>
            <p>
                Tarefas Criadas
                <span> 0 </span>
            </p>
            <p>
                Concluidas
                <span> 0 </span>
            </p>
        </div>

        <div className={style.line}>.   .   .</div>

       {comment.map(comment => {
            return (
                <TaskList 
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
                />
            )
       })}
       
           
       </div>
       
         
    )

}