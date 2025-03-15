import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToDoList } from "./components/ToDoList/ToDoList";

export const App = () => {
  return (
    <Provider store={store}>
      <main className="flex justify-center items-center min-h-screen">
        <ToDoList />
      </main>
    </Provider>
  );
};
