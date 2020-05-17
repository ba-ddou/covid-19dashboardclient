import React, { useState, memo } from "react";
import DateSlider from "app/components/DateSlider";
import "./styles.sass";
import Flag from "react-world-flags";

const extractStats = (country, godViewData) => {
	if (godViewData) {
		let res = godViewData.find(
			(elem) => elem.territory == country.toLowerCase()
		);

		if (res)
			return {
				confirmed: res.confirmed,
				recovered: res.recovered,
				dead: res.dead,
			};
	}
	return {
		confirmed: "unavailable",
		recovered: "unavailable",
		dead: "unavailable",
	};
};

const Stat = ({ number, name }) => {
	return (
		<div className="infoPanel-stats-stat">
			<span>{number}</span>
			<span>{name}</span>
		</div>
	);
};

const Info = ({ country, godViewData, lastDate, onDateChange }) => {
	let { confirmed, recovered, dead } = extractStats(
		country.value,
		godViewData
	);

	return (
		<div id="infoPanel" className="mainPanel">
			<span id="infoPanel-title">
				{country.value + " "} <Flag code={country.ISO_A2} height="20" />
			</span>
			<DateSlider lastDate={lastDate} onDateChange={onDateChange} />
			<div id="infoPanel-stats">
				<Stat number={dead} name="Deaths" />
				<Stat number={confirmed} name="Infections" />
				<Stat number={recovered} name="Recoveries" />
			</div>
		</div>
	);
};

export default Info;
