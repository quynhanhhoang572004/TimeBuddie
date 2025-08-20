import { useState } from "react";
import { Container } from "react-bootstrap";
import { TodoItem,type Todo } from "../components/todo"; 

const seed: Todo[] = [
  { id: "1", text: "Do Homework", done: false },
  { id: "2", text: "Do Homework", done: false },
  { id: "3", text: "Do Homework", done: false },
];

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(seed);
  const [newTask, setNewTask] = useState("");

  const toggle = (id: string) =>
    setTodos(ts => ts.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

  const start = (id: string) => {
    const t = todos.find(x => x.id === id);
    console.log("start:", t?.text);
  };

  const remove = (id: string) => setTodos(ts => ts.filter(t => t.id !== id));

  const add = () => {
    if (!newTask.trim()) return; 
    setTodos(ts => [
      ...ts,
      { id: crypto.randomUUID(), text: newTask.trim(), done: false },
    ]);
    setNewTask(""); 
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#C6E5E8" }}
    >
         <img
        src="/logo.svg"          
        alt="Logo"
        style={{
          height: "60px",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      />
      <div
        className="position-relative"
        style={{
          width: "min(900px, 92vw)",
          background: "white",
        
          borderRadius: "28px",
          padding: "48px 56px 96px",
          
        }}
      >
        
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Press Start 2P'",
            color: "#FFE898",
            textShadow: "-3px 2px 0px #FDC507",
            letterSpacing: "6px",
          }}
        >
          To-do list 🌻
        </h2>

      
        <div className="mx-3">
          {todos.map(t => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={toggle}
              onStart={start}
              onRemove={remove}
            />
          ))}
        </div>

   
        <div
          className="position-absolute d-flex align-items-center gap-2"
          style={{ right: 24, bottom: 24 }}
        >
          <input
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="New task..."
            style={{
              padding: "12px",
              borderRadius: 12,
              
              fontFamily: "'Press Start 2P'",
              fontSize: "12px",
              width: "200px",
            }}
            onKeyDown={e => e.key === "Enter" && add()} 
          />
          <button
            onClick={add}
            className="border-0"
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              fontFamily: "'Press Start 2P'",
              backgroundColor: "#FFE898",
              color: "#FFFF",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </Container>
  );
};
