import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
	return (
		<>
			<div className="d-flex gap-3 mb-4">
				<AddClientModal />
				<AddProjectModal />
			</div>
			<Projects />
			<hr />
			<Clients />
		</>
	);
};

export default Home;
