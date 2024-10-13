import { AddRounded } from "@mui/icons-material"
import "./AddTask.sass"
import { Task } from "../../api/types";
import { useState } from "react";

interface AddTaskProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function AddTask({ tasks, setTasks }: AddTaskProps) {
    const [value, setValue] = useState('');

    function addTask() {
        setTasks([...tasks, new Task(value)]);
    }
    return (
        <div className="addTask">
            <div className="input">
                <input
                    type="text"
                    placeholder="Make something..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={addTask}>
                    <AddRounded />
                </button>
            </div>
        </div>
    )
}
