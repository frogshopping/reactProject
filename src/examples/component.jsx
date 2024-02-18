import { useState } from "react";

const PariNaComponent = () => {
  const pari = [{ name: "amir" }, { uni: "brac" }];
  return (
    <div>
      {pari.map((item, idx) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.uni}</h1>
        </div>
      ))}
    </div>
  );
};

const AgeComponent = () => {
  const [agee, setagee] = useState(15);
  const increaseage = () => {
    setagee(agee + 2);
  };
  // const age = 24;
  return (
    <div>
      {agee >= 19 ? <h1>adult</h1> : <h1>not adult</h1>}
      {agee}
      <button onClick={increaseage}>increase agee</button>
    </div>
  );
};

const TodoComponent = () => {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState("");
  const handle_change = (event) => {
    setnewtask(event.target.value);
  };
  const addtask = () => {
    const task={
      id:todolist.length===0?1:todolist[todolist.length-1].id+1,
      taskname:newtask
    }
    settodolist([...todolist,task]);
  };
  const deletetask = (id) => {
    const newtodolist = todolist.filter((task) => {
      return task.id !== id;
    });
    settodolist(newtodolist)
  };

  return (
    <div className="addtask">
      <input onChange={handle_change} />
      <button onClick={addtask}>Add Task</button>

      <div className="list">
        {todolist.map((task) => {
          return (
            <div>
              <h1>{task.taskname}</h1>
              <button onClick={() => deletetask(task.id)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PariNaComponent, AgeComponent, TodoComponent };
