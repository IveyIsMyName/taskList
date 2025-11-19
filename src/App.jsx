import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import Footer from "./components/Footer";

function App() {

  const [tasks, setTasks] = useState([]);
  const [openSection, setOpenSection] = useState({
    taskList: true,
    tasks: true,
    completedTasks: true,
  });

  const [sortType, setSortType] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  function toggleSection(section) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  }

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  const activeTasks = sortTask(tasks.filter(task => !task.completed));
  const completedTasks = tasks.filter(task => task.completed);

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  }

  function sortTask(tasks) {
    return tasks.slice().sort((a, b) => {
      if (sortType === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === "asc" ?
          priorityOrder[a.priority] - priorityOrder[b.priority]
          :
          priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      else {
        return sortOrder === "asc" ?
          new Date(a.deadline) - new Date(b.deadline)
          :
          new Date(b.deadline) - new Date(a.deadline);
      }
    });
  }

  function toggleSortOrder(type) {
    if (sortType === type) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    else {
      setSortType(type);
      setSortOrder("asc");
    }
  }

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className={`close-button ${openSection.taskList ? "open" : ""}`} onClick={() => toggleSection("taskList")}>+</button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button className={`close-button ${openSection.tasks ? "open" : ""}`} onClick={() => toggleSection("tasks")}>+</button>
        <div className="sort-controls">
          <button className={`sort-button ${sortType === "date" ? "active" : ""}`} onClick={() => toggleSortOrder("date")}>By Date {sortType === "date" && (sortOrder === "asc" ? "\u2191" : "\u2193")}</button>
          <button className={`sort-button ${sortType === "priority" ? "active" : ""}`} onClick={() => toggleSortOrder("priority")}>By Priority {sortType === "priority" && (sortOrder === "asc" ? "\u2191" : "\u2193")}</button>
        </div>
        {openSection.tasks && <TaskList completeTask={completeTask} activeTasks={activeTasks} deleteTask={deleteTask} />}
      </div>

      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button className={`close-button ${openSection.completedTasks ? "open" : ""}`} onClick={() => toggleSection("completedTasks")}>+</button>
        {openSection.completedTasks && <CompletedTaskList completedTasks={completedTasks} deleteTask={deleteTask} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
