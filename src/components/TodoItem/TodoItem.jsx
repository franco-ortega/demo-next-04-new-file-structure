function TodoItem({ id, title, complete }) {
  return (
    <li>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{title}</label>
    </li>
  );
}

export default TodoItem;
