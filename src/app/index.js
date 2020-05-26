import React, { useState, useEffect } from "react";

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
	let [country, setCountry] = useState({
		value: "global",
		ISO_A2: "undefined",
	});
	let [date, setDate] = useState("2020-05-11");

	let { loading, error, godViewData } = useGodView(date);

	let selectCountry = (country) => setCountry(country);

	let onDateChange = (date) => setDate(date);

	useEffect(() => {
		console.log("root use Effect");
		let deferredPrompt;
		window.addEventListener(
			"beforeinstallprompt",
			(e) => {
				console.log("beforeinstallprompt captured");
				// Prevent the mini-infobar from appearing on mobile
				e.preventDefault();
				// Stash the event so it can be triggered later.
				deferredPrompt = e;
				// Update UI notify the user they can install the PWA
				setTimeout(() => {
					console.log("install sto");
					deferredPrompt.prompt();
				}, 5000);
			},
			[]
		);
	});

	return (
		<>
			<Header />
			<div id="mainContainer">
				<div id="mainContainer-subC1">
					<div id="mainContainer-subC1-subC" className="rootPanel">
						<SearchBar onSelect={selectCountry} mainPanel={true} />
						<Info
							country={country}
							godViewData={
								loading && !error ? false : godViewData.godView
							}
							lastDate="2020-05-23"
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
