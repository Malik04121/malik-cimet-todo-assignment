export const AllTaskComponents = ({ allTask ,deleteTask,openEditModal}) => {


    return (
        <>
            {allTask?.map((ele, index) => (
                <div className="taskContainer" key={index}>
                    <h3>{ele.title}</h3>
                    <h3>{ele.completed==false?"pending":"completed"}</h3>
                    <div>
                        <button onClick={() => openEditModal(ele, index)}>Edit</button>
                        <button id="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
};
