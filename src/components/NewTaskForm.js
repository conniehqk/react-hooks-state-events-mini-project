import React, { useState } from "react";

function NewTaskForm({ allCat, onTaskFormSubmit }) {
  const [taskName, setTaskName] = useState('')
  const [taskCat, setTaskCat] = useState('')
  function newTaskName(e) {
    setTaskName(e.target.value)
  }
  function newTaskCat(e) {
    setTaskCat(e.target.value)
  }
  const catOption = allCat.map((cat,index)=>{
    if (cat!='All') {
      return <option key={index}>{cat}</option>
    }
  })
  function newTaskSubmit(e) {
    e.preventDefault()
    const newTask = {
      text:taskName,
      category:taskCat
    }
    onTaskFormSubmit(newTask)
    setTaskName('')
    setTaskCat('')
  }
  return (
    <form className="new-task-form" onSubmit={newTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={newTaskName} />
      </label>
      <label>
        Category
        <select name="category" onChange={newTaskCat}>
          {catOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
