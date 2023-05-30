import { prisma } from './db';
import TodoItem from '@/components/TodoItem/TodoItem';

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </main>
    </>
  );
}
