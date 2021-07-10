import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Addtask =({addTask})=>{
  const [value,updateValue]=useState("");

const handleSubmit=e=>{
  e.preventDefault();
  if(value!=="")
  {
    addTask(value)
    updateValue("");
  }
}

return(

  <form onSubmit={handleSubmit}>
    <input
    type="text"
    value={value}
    placeholder="enter your task to do"
    onChange= {e =>updateValue(e.target.value)}
    />
    <button type="submit"><i class="material-icons">add</i></button>
  </form>
);

}
const ToDoList= () => {
  
  const mddTask=text=>updateTask([...tasks,{text}])
  const[tasks,updateTask] = useState([
    {
    text:"Wake Up",
    isCompleted:false
    },
    {
      text:"FreshUp",
      isCompleted:false
    },
    {
      text:"Man",
      isCompleted:false
    },
  ]
  );

  const toggleTask = index=>{
    const newTask =[...tasks];
    if(newTask[index].isCompleted)
    {
      newTask[index].isCompleted = false;
    
    }else{
    newTask[index].isCompleted = true;
    }
    updateTask(newTask)
  }
  const removeTask= index=>{
    const newTask=[...tasks];
    newTask.splice(index,1)
    updateTask(newTask);
  }
  return(

    <div className="List-of-Task-to-do">
    <Addtask addTask={mddTask}/>
      {tasks.map((task,index)=>(
        <div className="task-status">
          <span onClick ={() => toggleTask(index)} className={task.isCompleted? "completed-task":"task-name"}>
          {index} 
          {task.text}
          </span>
          <button onClick={()=>removeTask(index)}> <i className="material-icons">delete</i></button>
          
         </div>
      ))}
      
    </div>
  );
  }

ReactDOM.render(<ToDoList/>,document.getElementById('root'));