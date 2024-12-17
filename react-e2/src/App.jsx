import {ToDoList} from "./components/ToDoList/ToDoList";
import {TaskProvider} from "./context/ContextTask";

const App = () => {
  return (
    <>
      <TaskProvider>
        <ToDoList />
      </TaskProvider>
    </>
  );
};

export default App;
