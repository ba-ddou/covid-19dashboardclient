import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.scss";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import MarkSeriesComponent from "./components/MarkSeries";
import AreaSeriesComponent from './components/AreaSeries';
import { SeriesProvider } from "./contexts/seriesContext";

const App = () => {
	return (
		<div className="App">

		<h1>Covid-19 Dashboard</h1>
			<div className="section-primary">
				<div className="section-primary__card1">
					<SearchBar />
					<Info/>
				</div>
				<div className="section-primary__card2">
					<Map/>
				</div>
		</div>
		<div className="section-secondary">
			<SeriesProvider>
				<div className="section-secondary__card1">
					<AreaSeriesComponent/>
				</div>
				<div className="section-secondary__card2">
					<MarkSeriesComponent/>
				</div>
			</SeriesProvider>
		</div>
		</div>
		
			
	);
};

export default App;