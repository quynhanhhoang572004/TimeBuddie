
import { Homepage } from './page/homepage'
import { Route, Routes } from "react-router-dom";
import { TodoList } from './page/todoList';




function App() {


  return (
    
   <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/todo" element={<TodoList/>} />
    </Routes>
    
   
  )
}

export default App
