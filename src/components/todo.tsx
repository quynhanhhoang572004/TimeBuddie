import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export type Todo = { id: string; text: string; done: boolean };

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onStart: (id: string) => void;
  onRemove: (id: string) => void;
};

export const TodoItem =({ todo, onToggle, onStart, onRemove }: TodoItemProps) => {
    return(
        <div className="d-flex align-items-center justify-content-between my-3">
      <label className="d-flex align-items-center gap-3 m-0" style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="form-check-input"
          style={{ width: 24, height: 24, borderRadius: 4 }}
        />
        <span
          style={{
            fontFamily: "'Press Start 2P'",
            fontSize: "24px",
            color: "#7A8B2E",
            letterSpacing: "2px",
            textDecoration: todo.done ? "line-through" : "none",
            opacity: todo.done ? 0.6 : 1,
          }}
        >
          {todo.text}
        </span>
      </label>

      <div className="d-flex align-items-center gap-3">
        <Button
          size="sm"
          className="border-0"
          style={{
            fontFamily: "'Press Start 2P'",
            backgroundColor: "#F6E8A7",
            color: "#7A8B2E",
            borderRadius: 12,
            padding: "8px 16px",
          }}
          onClick={() => onStart(todo.id)}
        >
          start
        </Button>
        <Button
          size="sm"
          className="border-0"
          style={{
            fontFamily: "'Press Start 2P'",
            backgroundColor: "#EAA59C",
            color: "white",
            borderRadius: 12,
            padding: "8px 16px",
          }}
          onClick={() => onRemove(todo.id)}
        >
          remove
        </Button>
      </div>
    </div>
    )
}