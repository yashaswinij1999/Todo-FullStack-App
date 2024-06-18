import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TodoList({ todos }) {
  console.log(todos);

  return (
    <>
      <div className="m-2">
        {todos.length === 0 ? (
          <div> No Todos added </div>
        ) : (
          todos.map((el) => (
            <div className=" p-3 m-2 rounded-lg border-2 w-3/4 " key={el.id}>
              <div className="flex items-center  justify-between">
                {el.task}
                <div className="flex gap-2">
                  <MdEdit className="" /> <MdDelete />
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
};

export default TodoList;
