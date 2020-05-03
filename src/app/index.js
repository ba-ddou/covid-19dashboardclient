import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import AreaSeries from "./components/AreaSeries";
import MarkSeries from "./components/MarkSeries";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<div id="mainContainer">
				<div id="mainContainer-subC1">
					<div id="mainContainer-subC1-subC">
						<SearchBar />
						<Info />
					</div>
					<Map />
				</div>
				<div id="mainContainer-subC2">
					<AreaSeries />
					<MarkSeries />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
