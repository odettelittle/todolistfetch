import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [list, setlist] = useState([]);
  return (
    <>
      <div>
        <h1>Lista de Tareas </h1>
        <input
          type="text"
          placeholder="add task"
          onChange={(e) => {
            if (task !== "" && e.key === "Enter") {
              setlist();
              setTask("");
            }
          }}
          value={task}
        />
        <button
          onClick={() => {
            setList([...list, task]);
            setTask("");
          }}
        >
          Submit
        </button>

        <ul>
          {list.map((listItem, index) => {
            return (
              <li key={index} className="d-flex flex row">
                <p> {listItem} </p>
                <button
                  onClick={() => {
                    setList(list.filter((item) => item !== listItem));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
