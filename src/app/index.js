import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

import SearchBar from "./components/SearchBar";
import DateSlider from "./components/DateSlider";

const App = () => {
	return (
		<div>
			<h1>Covid-19 Dashboard</h1>
			<SearchBar />
			<DateSlider />
		</div>
	);
};

export default App;
