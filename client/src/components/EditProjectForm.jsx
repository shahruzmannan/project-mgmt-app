import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

const EditProjectForm = ({ project }) => {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState("new");

	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: {
			id: project.id,
			name: name,
			description: description,
			status: status,
		},
		refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === "" || description === "" || status === "") {
			return alert("Please fill out all the fields");
		}

		updateProject(project.id, name, description, status);
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-primary m-2"
				data-bs-toggle="modal"
				data-bs-target="#addProjectModal"
			>
				<div className="d-flex align-items-center">
					<FaList className="icon" />
					<div>Edit Project Details</div>
				</div>
			</button>

			<div
				className="modal fade"
				id="addProjectModal"
				aria-labelledby="addClientModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="addClientModalLabel">
								Edit Project Details
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form onSubmit={onSubmit}>
								<div className="mb-3">
									<label className="form-label">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Description</label>
									<textarea
										className="form-control"
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>
								<div className="mb-3">
									<label className="form-label">Status</label>
									<select
										id="status"
										className="form-select"
										value={status}
										onChange={(e) => setStatus(e.target.value)}
									>
										<option value="new">Not Started</option>
										<option value="progress">In Progress</option>
										<option value="completed">Completed</option>
									</select>
								</div>
								<button
									className="btn btn-primary"
									type="submit"
									data-bs-dismiss="modal"
								>
									Save
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditProjectForm;
