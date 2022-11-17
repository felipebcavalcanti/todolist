import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";


import "./global.css";


const tasks =[
  {
    id: 1,
    content: "Aqui vai uma nova tarefa",
    isCompleted: true,
  },
  {
    id: 2,
    content: "Aqui vai uma nova tarefa de novo",
    isCompleted: true,
  },
  {
    id: 3,
    content: "Aqui vai uma nova tarefa de novo e denovo",
    isCompleted: true,
  },
];

function App() {
 

  return (
    <div className="App">
      <div>
        <Header />
        {tasks.map(task => {
          return (
            <TaskList 
            key={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            />
          )
        })}
       
         
      </div>
    </div>
  )
}

export default App
