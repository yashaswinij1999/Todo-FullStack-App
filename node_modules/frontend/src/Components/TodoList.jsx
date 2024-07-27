import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TodoList({ todos, removeTodo, getTask, toggleTask }) {
  return (
    <>
      <div className="m-2 text-white font-semibold">
        {todos.length === 0 ? (
          <div className=" w-2/4 m-auto">No Todos added</div>
        ) : (
          todos.map((el) => (
            <div className="p-3 m-2 rounded-lg border-2 w-4/4" key={el.id}>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    checked={el.completed}
                    onClick={() => toggleTask(el._id, el.completed)}
                  />
                  <div className={`${el.completed ? "line-through" : null}`}>
                    {el.task}
                  </div>
                </div>
                <div className="flex gap-2" onClick={() => getTask(el._id)}>
                  <div>
                    <MdEdit />
                  </div>
                  <div onClick={() => removeTodo(el._id)}>
                    <MdDelete />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
  getTask: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default TodoList;
