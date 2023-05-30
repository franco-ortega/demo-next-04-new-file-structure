import { prisma } from './db';
import styles from './page.module.css';

export default async function Home() {
  const todos = await prisma.todo.findMany();
  // await prisma.todo.create({ data: { title: 'test', complete: false } });

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
