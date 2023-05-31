import { getTodos } from '@/utils/getTodos';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.css';

async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className={style.TodoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
