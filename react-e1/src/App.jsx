import {Button} from "./components/button/Button";
import {Input} from "./components/input/Input";
import {Section} from "./components/section/Section";
import {Task} from "./components/task/Task";

const App = () => {
  return (
    <>
      <Section>
        <h1>Nuctask</h1>
        <Input />
        <Task />
      </Section>
    </>
  );
};

export default App;
