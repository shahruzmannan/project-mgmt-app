import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
	mutation addProject(
		$name: String!
		$description: String!
		$status: ProjectStatus!
		$clientId: ID!
	) {
		addProject(
			name: $name
			description: $description
			status: $status
			clientId: $clientId
		) {
			id
			name
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`;

export const DELETE_PROJECT = gql`
	mutation DeleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
		}
	}
`;

export const UPDATE_PROJECT = gql`
	mutation UpdateProject(
		$id: ID!
		$name: String!
		$description: String!
		$status: ProjectStatusUpdate!
	) {
		updateProject(
			id: $id
			name: $name
			description: $description
			status: $status
		) {
			id
			name
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`;
