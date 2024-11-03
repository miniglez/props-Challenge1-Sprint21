const Task = ({ tasks, complete, del }) => {
    return (
        <>
            {tasks.lenght !== 0 && (
            <>
                {!tasks[0]?.completed &&
                (<>
                    <h2>Por hacer</h2>
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <h3>{task.text}</h3>
                                    <button onClick={() => complete.completedTask(task.id)}>Completar tarea</button>
                                </li>
                            )
                        }) }
                    </ul>
                </>)
                }   
            </>
            )}
            {tasks.lenght !== 0 && (
                <>
                    {tasks[0]?.completed &&
                    (<>
                        <h2>Completadas</h2>
                        <ul>
                            {tasks.map(task => {
                                return (
                                    <li key={task.id}>
                                        <h3>{task.text}</h3>
                                        <button onClick={() => del.deleteTask(task.id)}>Eliminar tarea</button>
                                    </li>
                                )
                            }) }
                        </ul>
                    </>)
                    }   
                </>
                )}
            
        </>
    )
}

export default Task