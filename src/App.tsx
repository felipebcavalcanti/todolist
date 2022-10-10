import { Header } from "./components/Header";
import { Comments } from "./components/Comments";
import { Post } from "./components/Post";


import "./global.css";

function App() {
 

  return (
    <div className="App">
      <div>
        <Header />
        <Comments />
        <Post />
        
      </div>
    </div>
  )
}

export default App
