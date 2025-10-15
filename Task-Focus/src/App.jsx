
import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";

export default function App() {
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

// export default App;