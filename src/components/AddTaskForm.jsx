import { useState } from "react"

const AddTaskForm = ({ allTasks }) => {

    const [input, setInput] = useState("")

    const addTaskFunction = (e) => {
        e.preventDefault()
        allTasks.addTask(input)
    }

    return (
    <>
        <form onSubmit={addTaskFunction}>
             <label htmlFor="task">Tarea: </label>
             <input 
                type="text"  
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Añade una nueva tarea"/>
            <button type="submit">Añadir tarea</button>
        </form>
    </>
    )
}

export default AddTaskForm