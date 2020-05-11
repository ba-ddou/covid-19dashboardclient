import React, { useState } from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

// import config from "./config";

import Header from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import AreaSeries from "./components/AreaSeries";
import MarkSeries from "./components/MarkSeries";
import Footer from "./components/Footer";

import useGodView from "app/hooks/useGodView";

const App = () => {
	let [country, setCountry] = useState({ value: "morocco", ISO_A2: "MA" });
	let [date, setDate] = useState("2020-05-09");

	let { loading, error, godViewData } = useGodView(date);

	let selectCountry = (country) => setCountry(country);

	let onDateChange = (date) => setDate(date);

	return (
		<>
			<Header />
			<div id="mainContainer">
				<div id="mainContainer-subC1">
					<div id="mainContainer-subC1-subC">
						<SearchBar onSelect={selectCountry} mainPanel={true} />
						<Info
							country={country}
							godViewData={
								loading && !error ? false : godViewData.godView
							}
							lastDate="2020-05-09"
							onDateChange={onDateChange}
						/>
					</div>
					<Map
						onClick={selectCountry}
						godViewData={loading ? false : godViewData.godView}
					/>
				</div>
				<div id="mainContainer-subC2">
					<AreaSeries country={country} />
					<MarkSeries />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
