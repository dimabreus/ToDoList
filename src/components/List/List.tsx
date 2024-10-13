import { DeleteForeverOutlined } from "@mui/icons-material";
import { Task } from "../../api/types";
import "./List.sass";

interface ListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}


export default function List({ tasks, setTasks }: ListProps) {
    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    return (
        <div className="list">
            {tasks.map((task: Task) => (
                <div key={task.id} className="task">
                    <h4>{task.id}. {task.title}</h4>

                    <button onClick={() => deleteTask(task.id)}>
                        <DeleteForeverOutlined />
                    </button>
                </div>
            ))}
        </div>
    )
}
