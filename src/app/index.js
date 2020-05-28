import React, { useState } from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

// import config from "./config";
import PwaPrompt from "./components/PwaPrompt";
import Header from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import AreaSeries from "./components/AreaSeries";
import MarkSeries from "./components/MarkSeries";
import Footer from "./components/Footer";

import useGodView from "app/hooks/useGodView";
import useDate from "app/hooks/useDate";

const App = () => {
	let [country, setCountry] = useState({
		value: "morocco",
		ISO_A2: "MA",
	});
	let lastDate = useDate();
	let [date, setDate] = useState("2020-05-26");

	let { loading, error, godViewData } = useGodView(date);

	let selectCountry = (country) => setCountry(country);

	let onDateChange = (date) => setDate(date);

	return (
		<>
			<PwaPrompt />
			<Header />
			<div id="mainContainer">
				<div id="mainContainer-subC1">
					<div id="mainContainer-subC1-subC" className="rootPanel">
						<SearchBar onSelect={selectCountry} mainPanel={true} />
						<Info
							country={country}
							godViewData={
								loading || error ? false : godViewData.godView
							}
							lastDate={
								lastDate ? lastDate.lastDate.date : "2020-05-26"
							}
							onDateChange={onDateChange}
							loading={loading}
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
