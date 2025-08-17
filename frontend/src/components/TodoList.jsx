import "./TodoList.css";
import TodoItem from "./TodoItem";
import React, { useMemo, useState } from "react";
const TodoList = ({todos,updatedChecked,updatedText ,onDelete}) => {

  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    if (!kw) return todos;
    return todos.filter((t) => (t.text ?? "").toLowerCase().includes(kw));
  }, [todos, q]);


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요"    value={q}
        onChange={(e) => setQ(e.target.value)}/>
      <div className="todos_wrapper">
        {filtered.map((todo, i) => (
          <TodoItem key={i} todo={todo} onDelete={onDelete}  updatedChecked={updatedChecked} updatedText={updatedText}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
