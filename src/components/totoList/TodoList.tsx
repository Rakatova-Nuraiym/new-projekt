import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/tools/store";
import { getReq, posrReq } from "../../store/tools/TodoSlece";
import Render from "./Render";
import scss from "./todoList.module.scss";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useAppDispatch();

  const postTodo = () => {
    console.log(title);
    if (title !== "" || img !== "") {
      const newData = {
        title,
        img,
      };
      dispatch(posrReq(newData));
    }
    setImg("");
    setTitle("");
  };

  useEffect(() => {
    dispatch(getReq());
  }, [dispatch]);
  return (
    <div className={scss.Inputs}>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
        <button onClick={postTodo}>add</button>
      </div>
      <Render />
    </div>
  );
};

export default TodoList;
