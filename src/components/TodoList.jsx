import React , {useState} from 'react';

function TodoList() {

  const [tasks, setTasks] = useState(["Sample Task 1", "Sample Task 2"]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) { 
    setNewTask(e.target.value);
  }

  function handleAddTask() {
  if (newTask.trim() !== '') { setNewTask ('');
    setTasks([...tasks, newTask]);}
   
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks (updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);}
  }



  return (
    <div className="todo-list" >

      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button
          onClick={handleAddTask}
          className='add-button'>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
           < span className='task-item'>
            {task} </span>
            <button onClick={() => moveTaskUp(index)}>↑</button>
            <button onClick={() => moveTaskDown(index)}>↓</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>   
          </li>
        ))
        }   
      </ol>

    </div>
      )
}
export default TodoList;