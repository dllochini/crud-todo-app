import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const gettodos = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/todos`,
        { method: "GET" },
      );

      const todos = await response.json();
      setTodos(todos);
    };

    gettodos();
  }, []);


  return (
    <div className="App">
      <h1>Task Manager</h1>

      <div>
        {todos.length > 0 ? (

          //listing out an array (todos)
          todos.map((todo) => (
            <div>

              <p>{todo.task}</p>
              <p>{todo.status ? "completed" : "pending"}</p>
            </div>
          ))

        ) : (
          <div>
            <p>No todos found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;