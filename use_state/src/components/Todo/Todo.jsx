import { useState } from "react";
import style from "./Todo.module.scss";
export const Todo = () => {
  const [todoArray, setTodoArray] = useState(["Første item", "andet item"]);

  const addToArray = () => {
    let clone = [...todoArray];
    clone.push("new item");
    setTodoArray(clone);
  };

  return (
    <section className={style.todoStyle}>
      <h3>Add to Array State Example</h3>
      <button onClick={addToArray}>Add To Array</button>
      <div>
        {todoArray && todoArray.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </section>
  );
};
