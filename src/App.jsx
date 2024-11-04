import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 4, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (task) => {
    let maxID = 0

    tasks.forEach(element => {
      if(element.id >= maxID){
        maxID = element.id + 1
      }
    });
    const newTask = {
      id: maxID,
      text: task,
      completed: false
    }
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  const completedTask = (id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id){
        const theTask = {
          ...task,
          completed: true
        }

        return theTask
      }
      return task
    })
    setTasks(newTasks)
    
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const filterTasks = (completed) => {
  return tasks.filter(task => task.completed === completed)
}

  return (
    <>
      <AddTaskForm allTasks={ {addTask} }/>
      <Task tasks={filterTasks(false)} complete={{completedTask}} del={{deleteTask}}/>
      <Task tasks={filterTasks(true)} complete={{completedTask}} del={{deleteTask}}/>
    </>
  );
};

export default App;
