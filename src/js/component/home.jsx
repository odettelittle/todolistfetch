import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	return (
		<>
			<div className="card text-center  w-25 p-4 mx-auto border border-danger mt-3 border border-5">
				<div className="d-flex justify-content-center">
					<h1>Things to do</h1>
				</div>
				<div className="d-flex justify-content-center input-group mb-3">
					<input
						type="text"
						placeholder="Add Task"
						onChange={(event) => {
							setTask(event.target.value);
						}}
						value={task}
						onKeyUp={(event) => {
							if (task !== "" && event.key == "Enter") {
								setList([...list, task]);
								setTask("");
							}
						}}
					/>

					<button
						onClick={() => {
							if (task !== "") {
								setList([...list, task]);
								setTask("");
							}
						}}>
						Submit
					</button>
				</div>
				<ul>
					{list.map((listItem, index) => {
						return (
							<li
								key={index}
								className="d-flex flex-row justify-content-center btn btn-outline-success">
								<p> {listItem} </p>
								<button
									className="btn btn-primary btn-sm ms-2"
									onClick={() => {
										setList(
											list.filter(
												(item, i) => i !== index
											)
										);
									}}>
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
