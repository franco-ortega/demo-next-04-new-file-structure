import { prisma } from './db';
import TodoList from '@/components/TodoList/TodoList';

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <main>
        <h2>Todo List</h2>
        <TodoList todos={todos} />
      </main>
    </>
  );
}
