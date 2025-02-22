import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { useMutation } from "@apollo/client";

const DeleteProjectButton = ({ projectId }) => {
	const navigate = useNavigate();

	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: projectId },
		onCompleted: () => navigate("/"),
		refetchQueries: [{ query: GET_PROJECTS }],
	});
	return (
		<>
			<button className="btn btn-danger m-2" onClick={deleteProject}>
				<FaTrash className="icon" />
				Delete
			</button>
		</>
	);
};

export default DeleteProjectButton;
