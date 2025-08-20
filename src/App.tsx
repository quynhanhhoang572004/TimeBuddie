
import { Homepage } from './page/homepage'
import { Route, Routes } from "react-router-dom";
import { TodoList } from './page/todoList';
import { TimerPage } from './page/timer';



function App() {


  return (
    
   <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/todo" element={<TodoList/>} />
       <Route path="/timer" element={<TimerPage/>} />
    </Routes>
    
   
  )
}

export default App
