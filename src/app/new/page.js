import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <>
      <h2>Create a new Todo</h2>
      <form>
        <input type="text" name="title" />
        <div>
          <Link href="..">Cancel</Link>
          <button>Create</button>
        </div>
      </form>
    </>
  );
}

export default Page;
