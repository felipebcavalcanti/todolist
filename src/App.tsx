import { Header } from "./components/Header";
import {  TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";


import "./global.css";

const task =[
  {
      id: 1,
      isComplete: true,
      content: ["simply dummy text of the printing and typesetting industry"]

  },
  {
      id: 2,
      isComplete: true,
      content: ["simply dummy text of the printing and typesetting industry123123"]

  },
  {
    id: 3,
    isComplete: true,
    content: ["simply dummy text of the printing and typesetting industry35345345t"]

},
]


function App() {
 

  return (
    <div className="App">
      <div>
        <Header />
        <div className="wrapper">
          
          <TaskList />
          {task.map(task => {
            return ( 
            <NewTask
            key={task.id}
            content={task.content}
            isComplete={task.isComplete}
            />)
          })}
          
          
        </div>
        
      </div>
    </div>
  )
}

export default App
