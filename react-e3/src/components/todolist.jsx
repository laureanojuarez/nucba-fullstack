import { AddTask } from "../features/Task/Task";

export const ToDoList = () => {
  return (
    <div className="flex flex-col items-center w-[600px] gap-4 rounded-lg bg-white 100 p-4 shadow-md">
      <h1 className="text-2xl font-bold">Nucstacks</h1>
      <AddTask />
    </div>
  );
};
