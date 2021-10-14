import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToShow, setTasksToShow] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeCat, setActiveCat] = useState('')
  function removeTask(task) {
    // find task in state in array
    // make copy of data in state
    const prevTasks = [...tasksToShow]
    // remove task from copy of data
    const newTasks = prevTasks.filter(alltask=>{
      return alltask!=task
    })
    // set state to new copy
    setTasksToShow(newTasks)
  }
  function filterCat(e) {
    setSelectedCategory(e.target.textContent)
    setActiveCat(e.target.textContent)
  }
  function onTaskFormSubmit(t) {
    setTasksToShow([...tasksToShow,t])
  }
  const tasksToDisplay = () => {
    return tasksToShow.filter((task)=>{
    if (selectedCategory==='All') {
      return true
    } else {
      return task.category===selectedCategory
    }
  })
}

  console.log(selectedCategory)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCat={filterCat} activeCat={activeCat} />
      <NewTaskForm allCat={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList removeTask={removeTask} tasks={tasksToDisplay()} />
    </div>
  );
}

export default App;
