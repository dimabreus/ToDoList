import { useEffect, useState } from 'react';
import './App.sass';
import { Task } from './api/types';
import List from './components/List/List';
import AddTask from './components/AddTask/AddTask';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    Task.lastId = 0;
  }, [])

  return (
    <div className='app-container'>
      <div className="wrapper">
        <List
          tasks={tasks}
          setTasks={setTasks}
        />

        <AddTask
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  )
}

export default App
