import React from "react";

function Task({ text, category, removeTask, task }) {
  function deleteButton() {
    removeTask(task)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteButton}>X</button>
    </div>
  );
}

export default Task;
