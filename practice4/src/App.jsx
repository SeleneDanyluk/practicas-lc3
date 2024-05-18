import { useState } from 'react';
import './App.css';
import NewTask from './components/newTask/NewTask';
import Tasks from './components/tasks/Tasks';
import { TASKS } from './data/Data';

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [lastId, setLastId] = useState(tasks.length);

  const newId = () => {
    setLastId(lastId + 1);
  }

  const addNewTask = (onHandleAddNewTask) => {
    newId();
    const taskData = {
      id: lastId,
      task: onHandleAddNewTask,
      isComplete: false
    };
    setTasks((prev) => [...prev, taskData])
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <>
      <NewTask onHandleAddNewTask={addNewTask}></NewTask>
      <Tasks
        tareas={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      ></Tasks>
    </>
  );
};

export default App
