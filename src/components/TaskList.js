import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, removeTask }) {
  const tasksDisplay = tasks.map((task,index)=>{
    return <Task key={index} task={task} text={task.text} category={task.category} removeTask={removeTask} />
  })
  return (
    <div className="tasks">
      {tasksDisplay}
    </div>
  );
}

export default TaskList;
