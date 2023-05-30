import { getTodos } from '@/utils/getTodos';
import TodoItem from '../TodoItem/TodoItem';

async function TodoList() {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
