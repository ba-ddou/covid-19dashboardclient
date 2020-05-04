import React from "react";
import DateSlider from "app/components/DateSlider";
import "./styles.sass";

const Stat = ({ number, name }) => {
	return (
		<div className="infoPanel-stats-stat">
			<span>{number}</span>
			<span>{name}</span>
		</div>
	);
};

const Info = () => {
	return (
		<div id="infoPanel" className="mainPanel">
			<span id="infoPanel-title">Morocco</span>
			<DateSlider />
			<div id="infoPanel-stats">
				<Stat number="1124" name="Infections" />
				<Stat number="84" name="Deaths" />
				<Stat number="96" name="Recoveries" />
			</div>
		</div>
	);
};

export default Info;
