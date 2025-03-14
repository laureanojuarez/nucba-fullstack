import { MainStyled } from "./assets/global-styles";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { store } from "./app/store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <MainStyled>
        <ToDoList />
      </MainStyled>
    </Provider>
  );
};
