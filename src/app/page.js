import { prisma } from './db';
import styles from './page.module.css';

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  console.log('TODOS', todos);

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
