"use client";

import styles from "./page.module.css";
import Input from "@/components/Input";
import List from "@/components/List";
import { useEffect, useState } from "react";
import { todoItem } from "@/intefaces";

export default function Home() {
  const [todos, setTodos] = useState<todoItem[]>([]);
  localStorage.setItem('todos',JSON.stringify(todos))
  useEffect(() => {
    const listJSON = localStorage.getItem("todos");
    const list = listJSON && JSON.parse(listJSON);
    
    setTodos(list?list:[]);
  }, []);

  return (
    <main className={styles.main}>
      <h1>To do</h1>

      <Input todos={todos} setTodos={setTodos} />

      <List todos={todos} setTodos={setTodos} />
    </main>
  );
}
