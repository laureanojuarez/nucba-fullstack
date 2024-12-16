import {Input} from "./components/input/Input";
import {Section} from "./components/section/Section";
import {Task} from "./components/task/Task";
import {ContextProvider} from "./context/myContext";

const App = () => {
  return (
    <>
      <Section>
        <h1>Nuctask</h1>
        <ContextProvider>
          <Input />
        </ContextProvider>
        <Task />
      </Section>
    </>
  );
};

export default App;
