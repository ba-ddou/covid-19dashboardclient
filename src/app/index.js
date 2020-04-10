import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

import SearchBar from "./components/SearchBar";

const App = () => {
	return (
		<div>
			<h1>Covid-19 Dashboard</h1>
			<SearchBar />
		</div>
	);
};

export default App;
