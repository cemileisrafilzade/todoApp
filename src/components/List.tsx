import styles from "./styles.module.css";
import { todoItem } from "@/intefaces";

function List(props: any) {
  const todos: todoItem[] = props.todos;
  const setTodos: any = props.setTodos;

  return (
    <div className={styles.list}>
      {todos?.map((item) => (
        <div className={styles.listItem} key={item.id}>
          <input type="checkbox" />
          <p className={item.done ? styles.done : ""}>{item.title}</p>

          <div className={styles.btns}>
            <div className={styles.edit}>Edit</div>
            <div className={styles.delete}>Delete</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
