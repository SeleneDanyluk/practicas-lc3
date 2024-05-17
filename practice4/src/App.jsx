import { useState } from 'react';
import './App.css';
import NewTask from './components/newTask/NewTask';
import Tasks from './components/tasks/Tasks';
import { TASKS } from './data/Data';

function App() {

  const [tasks, setTasks] = useState(TASKS);

  const addNewTask = (onHandleAddNewTask) => {
    const taskData = {
      task: onHandleAddNewTask,
      state: false
    };
    setTasks((prev) => [...prev, taskData])
  };

  return (
    <>
      <NewTask onHandleAddNewTask={addNewTask}></NewTask>
      <Tasks
        tareas={tasks}
      ></Tasks>
    </>
  )
}

export default App
