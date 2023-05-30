import TodoList from '@/components/TodoList/TodoList';

export default async function Home() {
  return (
    <>
      <main>
        <h2>Todo List</h2>
        <TodoList />
      </main>
    </>
  );
}
