"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { todoItem } from "@/intefaces";
function Input(props: any) {
  const todos: todoItem[] = props.todos;
  const setTodos: any = props.setTodos;
  const [newValue, setNewValue] = useState("");
  // const [todos, setTodos] = useState<todoItem[]>([]);
  const handleAdd = () => {
    if (newValue?.length) {
      let temp: todoItem = {
        title: newValue,
        id: todos?.length + 1,
        done: false,
      };
      console.log(temp);
      
      setTodos([...todos, temp]);
      setNewValue("");
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  };
console.log(todos);

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Add new to do"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Input;
