import { useState } from "react";

function TaskForm({ addTask }) {

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Low");
    const [deadline, setDeadline] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() && deadline) {
            addTask({ title, priority, deadline });
            setTitle("");
            setPriority("Low");
            setDeadline("");
        }
    }

    return (<form action="" className="task-form" onSubmit={handleSubmit}>
        <input type="text"
            value={title}
            placeholder="task title"
            onChange={(e) => setTitle(e.target.value)}
            required />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <input type="datetime-local"
            value={deadline}
            required
            onChange={(e) => setDeadline(e.target.value)} />
        <button type="submit">Add task</button>
    </form >
    );
}

export default TaskForm;