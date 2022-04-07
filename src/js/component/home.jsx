import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

//include images into your bundle

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/odettelittle",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setList(result))
			.catch((error) => console.log("error", error));
	}, []);
	///////////

	const addItem = (newItem) => {
		const newList = [...list, { label: newItem, done: false }];

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(newList);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/odettelittle",
			requestOptions
		)
			.then((response) =>
				response.status === 200 ? setList(newList) : ""
			)
			.catch((error) => console.log("error", error));
	};

	///////

	const deleteItem = (itemDelete) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(itemDelete);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/odettelittle",
			requestOptions
		)
			.then((response) =>
				response.status === 200 ? setList(itemDelete) : ""
			)
			.catch((error) => console.log("error", error));
	};

	///////

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
								addItem(task);
								setTask("");
							}
						}}
					/>

					<button
						onClick={() => {
							if (task !== "") {
								addItem(task);
								setTask("");
							}
						}}>
						Submit
					</button>
				</div>
				<ul>
					{list &&
						list.map((listItem, index) => {
							return (
								<li
									key={index}
									className="d-flex flex-row justify-content-center btn btn-outline-success">
									<p> {listItem.label} </p>

									<button
										className="btn btn-primary btn-sm ms-2"
										onClick={() => {
											deleteItem(
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
