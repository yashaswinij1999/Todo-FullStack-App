import axios from "axios";
import TodoForm from "./TodoForm";

function TodoApp() {
  async function addTask(newTask) {
    if (!newTask.trim()) return;
    try {
      await axios.post("http://localhost:3000/todos/createTodo", {
        task: newTask,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="border-2 w-9/12 h-5/6 p-2 flex items-center justify-center">
        <TodoForm addTask={addTask} />
      </div>
    </>
  );
}

export default TodoApp;
