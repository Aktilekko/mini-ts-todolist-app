import { useState, useEffect, useRef } from "react";
import { ITodo } from "./components/types/data";
import ITodoList from "./components/TodoList";
import "./app.scss";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="app">
      <div className="container app__container">
        <h2>My Todo app</h2>
        <div className="app__works">
          <input
            className="add"
            value={value}
            onChange={handleChange}
            type="text"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ITodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default App;
