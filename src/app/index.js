import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.scss";

import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import MarkSeries from "./components/MarkSeries";
import AreaSeries from './components/AreaSeries';
import {AppProvider} from "./components/appContext";

const App = () => {
	return (
		<AppProvider>
			<h1>Covid-19 Dashboard</h1>
			<div className="section-primary">
				<div className="section-primary__box1">
					<SearchBar />
					<Info/>
				</div>
			<div className="section-primary__box2">
			 	<Map/>
			</div>
		</div>
		<div className="section-secondary">
			<div className="section-secondary__box1">
			  <AreaSeries/>
			</div>
			<div className="section-secondary__box2">
				<MarkSeries/>
			</div>
		</div>
		</AppProvider>
		
			
	);
};

export default App;
