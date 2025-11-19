import TaskItem from "./TaskItem";

function TaskList({ activeTasks, deleteTask, completeTask }) {
  return (
    <ul className="task-list">
      {activeTasks.map(task => (<TaskItem completeTask={completeTask} deleteTask={deleteTask} task={task} key={task.id} />))}
    </ul>
  );
}

export default TaskList;