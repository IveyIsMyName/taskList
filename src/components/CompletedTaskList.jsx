import TaskItem from "./TaskItem";

function CompletedTaskList({ completedTasks, deleteTask }) {
    return (
        <ul className="completed-task-list">
            {completedTasks.map((task) => (<TaskItem key={task.id} task={task} deleteTask={deleteTask} />))}
            {/* <TaskItem /> */}
        </ul>
    );
}

export default CompletedTaskList;