import { AddRounded } from "@mui/icons-material";
import "./AddTask.sass";
import { Task } from "../../api/types";
import { useState } from "react";

interface AddTaskProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function AddTask({ tasks, setTasks }: AddTaskProps) {
    const [value, setValue] = useState('');

    function addTask() {
        if (value.trim()) {
            setTasks([...tasks, new Task(value)]);
            setValue('');
        }
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className="addTask">
            <div className="input">
                <input
                    type="text"
                    placeholder="Make something..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={addTask}>
                    <AddRounded />
                </button>
            </div>
        </div>
    );
}
