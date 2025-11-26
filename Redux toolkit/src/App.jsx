import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
