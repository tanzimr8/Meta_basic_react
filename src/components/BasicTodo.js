import { useState } from "react"; 


const TodoForm = (props)=>{
    const [formData, setFormData] = useState({
        taskName:'',
        taskDetails:'',
        taskId: ''
    });
    const inputHandler = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const formHandler = (e)=>{
        e.preventDefault();
        props.addTask(formData);
        setFormData({
            taskName:'',
            taskDetails:'',
            taskId: ''
        })
    }
    return(
        <div className="todo-wrapper">
            <h2>Add a new task</h2>
            <form onSubmit={formHandler}>
                <div className="taskName">
                    <label for="task">Task Name</label>
                    <input type="text" id="task" name="taskName" placeholder="Add a new task" value={formData.taskName} onChange={inputHandler} />
                </div>
                <div className="taskDetails">
                    <label for="details">Task Details</label>
                    <input type="text" id="details" name="taskDetails" placeholder="Add task details" value={formData.taskDetails} onChange={inputHandler}/>
                </div>
                <button disabled={!formData.taskName} type="submit">ADD</button>
            </form>
        </div>
    );
}
const TodoLists = (props)=>{

    return(
    <ul>
        {props.allTasks.map((task)=>{
            return(
            <li key={task.taskName}>{task.taskName} - <span><i>{task.taskDetails}</i></span></li>
        )})}
    </ul>
    );
    
}
const BasicTodo = ()=>{
    const [tasks,setTasks] = useState([]);
    const addTask = (newTask)=>{
        setTasks([...tasks, newTask]);
    }
    return(
        <div className="box">
            <TodoForm addTask = {addTask}/>
            <TodoLists allTasks = {tasks}/>
        </div>
    )
}
export default BasicTodo;