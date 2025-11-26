import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Your Todos
      </h2>
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex w-[400px] justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg"
          >
            {isEditing === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-700 text-white rounded px-2 py-1 w-[200px]"
              />
            ) : (
              <span
                title={todo.text}
                className="text-white text-lg w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {todo.text}
              </span>
            )}
            <div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                X
              </button>
              {isEditing === todo.id ? (
                <button
                  onClick={() => {
                    if (editText.trim() !== "") {
                      dispatch(updateTodo({ id: todo.id, text: editText }));
                      setIsEditing(null);
                      setEditText("");
                    }
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsEditing(todo.id);
                    setEditText(todo.text);
                  }}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md ml-2"
                >
                  Update
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
