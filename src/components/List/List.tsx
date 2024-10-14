import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DeleteOutlineRounded } from "@mui/icons-material";
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

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                {(provided) => (
                                    <div
                                        className="task"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <h4>{task.id}. {task.title}</h4>

                                        <button onClick={() => deleteTask(task.id)}>
                                            <DeleteOutlineRounded sx={{ color: '#607D8B' }} />
                                        </button>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
