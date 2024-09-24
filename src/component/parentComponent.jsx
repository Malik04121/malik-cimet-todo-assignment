import { useState } from "react";
import { AddTaskComponent } from "./addTaskComponent"
import { AllTaskComponents } from "./allTaskListComponent"
import { EditTaskModal } from "./modalCompoent";


export const ParentComponent=()=>{

    const [allTask, setAllTask] = useState(() => {
        return JSON.parse(localStorage.getItem("todo")) || [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Add task function to update both state and localStorage
    const addTask = (task) => {
        const newTask = {
            id: allTask.length > 0 ? allTask[allTask.length - 1].id + 1 : 1,
            title: task,
            completed: false,
        };
        
        const updatedTasks = [...allTask, newTask];
        setAllTask(updatedTasks); // Update state
        localStorage.setItem("todo", JSON.stringify(updatedTasks)); // Update localStorage
    };

    const deleteTask = (index) => {
        const updatedTasks = allTask.filter((_, i) => i !== index);
        setAllTask(updatedTasks); // Update state
        localStorage.setItem("todo", JSON.stringify(updatedTasks)); // Update localStorage
    };

    const openEditModal = (task, index) => {
        setTaskToEdit({ task, index });
        setIsModalOpen(true); // Show the modal
    };

    const updateTask = (updatedTask, index) => {
        const updatedTasks = [...allTask];
        updatedTasks[index] = updatedTask;
        setAllTask(updatedTasks); // Update state
        localStorage.setItem("todo", JSON.stringify(updatedTasks)); // Update localStorage
        setIsModalOpen(false); // Close the modal
    };
   return(
    <div className="parentComponent">
        <h1>Todo App</h1>
        <AddTaskComponent addTask={addTask} />
        <AllTaskComponents allTask={allTask} deleteTask={deleteTask} openEditModal={openEditModal} />
        {isModalOpen && (
                <EditTaskModal 
                    taskToEdit={taskToEdit} 
                    updateTask={updateTask} 
                    closeModal={() => setIsModalOpen(false)} 
                />
            )}

    </div>
   )
}
