import { DeleteForeverOutlined } from "@mui/icons-material";
import { Task } from "../../api/types";
import "./List.sass";

interface ListProps {
    tasks: Task[];
}

export default function List({ tasks }: ListProps) {
    return (
        <div className="list">
            {tasks.map((task: Task) => (
                <div key={task.id} className="task">
                    <h4>{task.id}. {task.title}</h4>
                    <DeleteForeverOutlined />
                </div>
            ))}
        </div>
    )
}
