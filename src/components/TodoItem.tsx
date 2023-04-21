import { ITodo } from "./types/data";
import "./todoItem.scss";
import { AiFillDelete } from "react-icons/ai";

export interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <h4>{title}</h4>
      <button onClick={() => removeTodo(id)}>
        <span>
          <AiFillDelete className="delete__icon" />
        </span>
      </button>
    </div>
  );
};

export default TodoItem;
