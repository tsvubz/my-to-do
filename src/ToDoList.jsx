
import { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Hit The Gym", "Shower", "Code", "More Coding"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    

  return (
    <>
        <div>

            <h1>Terry&#39;s To Do List</h1>

            <div>
                <input 
                    type="text"
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </>
  )
}

export default ToDoList