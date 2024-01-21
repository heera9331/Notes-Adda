import Todo from "@/lib/models";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/todo", {
    next: { revalidate: 3600 },
  });
  console.log(res);
  if (!res.ok) {
    console.log("someting went wrong");
    return;
  }

  return res.json();
};

const TodoPage = async () => {
  // FETCH DATA WITH AN API
  const todos = (await getData()) || [];
  console.log(todos);
  return (
    <div>
      <h2>Todo will we display here</h2>
      <div>
        {todos.map((todo, idx) => {
          return (
            <div key={idx}>
              <li key={idx}>{todo.title}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoPage;
