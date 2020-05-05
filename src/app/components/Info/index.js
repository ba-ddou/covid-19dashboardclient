import React from "react";
import DateSlider from "app/components/DateSlider";
import "./styles.sass";
import Flag from "react-world-flags";

const Stat = ({ number, name }) => {
	return (
		<div className="infoPanel-stats-stat">
			<span>{number}</span>
			<span>{name}</span>
		</div>
	);
};

const Info = ({ country }) => {
	return (
		<div id="infoPanel" className="mainPanel">
			<span id="infoPanel-title">
				{country.value + " "} <Flag code={country.ISO_A2} height="20" />
			</span>
			<DateSlider lastDate="25/03/2020" />
			<div id="infoPanel-stats">
				<Stat number="1124" name="Infections" />
				<Stat number="84" name="Deaths" />
				<Stat number="96" name="Recoveries" />
			</div>
		</div>
	);
};

export default Info;
