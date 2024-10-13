import { useEffect, useState } from 'react';
import './App.sass';
import { Task } from './api/types';
import List from './components/List/List';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    Task.lastId = 0;
    setTasks([new Task('Task 1'), new Task('Task 2')]);
  }, [])

  return (
    <div className='app-container'>
      <div className="wrapper">
        <List
          tasks={tasks}
        />


      </div>
    </div>
  )
}

export default App
