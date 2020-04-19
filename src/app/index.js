import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

import SearchBar from "./components/SearchBar";
import MarkSelector from "./components/MarkSelector";

const App = () => {
	return (
		<div>
			<h1>Covid-19 Dashboard</h1>
			<SearchBar onSelect={(country) => console.log(country)} />
			<MarkSelector />
		</div>
	);
};

export default App;
