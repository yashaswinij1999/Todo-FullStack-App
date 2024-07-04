import axios from "axios";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    getTasks();
  }, [todos, isEdit]);

  async function getTasks() {
    try {
      const response = await axios.get("http://localhost:3000/todos/getData");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTask(newTask) {
    if (!newTask.trim()) return;
    try {
      await axios.post("http://localhost:3000/todos/createTask", {
        task: newTask,
      });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTodo(id) {
    try {
      const removeTask = await axios.delete(
        `http://localhost:3000/todos/deleteTask/${id}`
      );
      console.log(removeTask);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit() {
    addTask(task);
    reset();
  }

  function reset() {
    setTask("");
  }

  async function getTask(id) {
    try {
      const todo = await axios.get(`http://localhost:3000/todos/getTask/${id}`);
      setTask(todo.data.task);
      setIsEdit(true);
      setCurrentId(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(id, updatedTask) {
    try {
      await axios.patch(`http://localhost:3000/todos/editTask/${id}`, {
        task: updatedTask,
      });
      setIsEdit(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  const toggleTask = async function (id, toggledTask) {
    try {
      await axios.patch(`http://localhost:3000/todos/editTask/${id}`, {
        completed: !toggledTask,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-9/12 h-5/6 p-2 flex justify-center">
        <div className="p-4 m-auto">
          <div className="m-auto">
            <input
              type="text"
              name="task"
              placeholder="Enter your task here ..."
              className="border-2 h-14 p-2 w-4/4 rounded-lg m-4 text-sm"
              value={task}
              onChange={handleChange}
            />
            {isEdit ? (
              <button
                className="m-4 border-2 h-14 p-2 w-20 rounded-lg bg-blue-600 text-white font-semibold"
                onClick={() => handleUpdate(currentId, task)}
              >
                Update
              </button>
            ) : (
              <button
                className="m-4 border-2 h-14 p-2 w-16 rounded-lg bg-blue-600 text-white font-semibold"
                onClick={handleSubmit}
              >
                Add
              </button>
            )}
          </div>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            getTask={getTask}
            toggleTask={toggleTask}
          />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
