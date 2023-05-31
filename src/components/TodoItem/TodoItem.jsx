import style from './TodoItem.module.css';

function TodoItem({ id, title, complete }) {
  return (
    <li className={style.TodoItem}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{title}</label>
    </li>
  );
}

export default TodoItem;
