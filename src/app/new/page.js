import Link from 'next/link';

// async function createTodo(data) {
//   ('use server');

//   console.log('hi', data.title);
// }

function Page() {
  return (
    <>
      <h2>Create a new Todo</h2>
      <form
      // action={createTodo((e) => e.target.value)}
      >
        <input type="text" name="title" />
        <div>
          <Link href="..">Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}

export default Page;
