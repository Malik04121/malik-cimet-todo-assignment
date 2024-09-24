import { useState } from "react";

export const EditTaskModal = ({ taskToEdit, updateTask, closeModal }) => {
    const [editedTask, setEditedTask] = useState(taskToEdit.task);

    const handleSave = () => {
        updateTask(editedTask, taskToEdit.index); // Save the changes
    };

    return (
        <div className="modal">
            <div className="modalContent">
                <h2>Edit Task</h2>
                <input 
                    type="text" 
                    value={editedTask.title} 
                    onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                />
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};
