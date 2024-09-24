import { useState } from "react";

export const AddTaskComponent = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if (task.trim() === "") return; 
        addTask(task); 

        setTask("");   
     
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter A Task"
                value={task}
                id="inputTask"
                onChange={(e) => setTask(e.target.value)}
            />
            <div>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
};
