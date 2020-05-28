import React from "react";
import DateSlider from "app/components/DateSlider";
import "./styles.sass";
import Flag from "react-world-flags";
import Loader from "app/components/Loader";

const extractStats = (country, godViewData) => {
	if (godViewData) {
		let res = godViewData.find(
			(elem) => elem.territory === country.toLowerCase()
		);

		if (res) return res;
	}
	return {};
};

const Stat = ({ number, badge, name }) => {
	return (
		<div className="infoPanel-stats-stat">
			<div>
				<span>{number}</span>
				{(() => {
					if (typeof badge === "number") {
						if (badge > 0) {
							if (name !== "Recoveries")
								return (
									<span className="badge-positive">{`+${badge}`}</span>
								);
							else
								return (
									<span className="badge-negative">{`+${badge}`}</span>
								);
						} else if (badge < 0) {
							return (
								<span className="badge-negative">{badge}</span>
							);
						} else {
							if (name !== "Recoveries")
								return (
									<span className="badge-negative">{`+${badge}`}</span>
								);
							else
								return (
									<span className="badge-positive">{`+${badge}`}</span>
								);
						}
					} else return <span></span>;
				})()}
			</div>
			<span>{name}</span>
		</div>
	);
};

const Info = ({ country, godViewData, lastDate, onDateChange, loading }) => {
	let {
		active,
		newActive,
		confirmed,
		newConfirmed,
		recovered,
		newRecovered,
		dead,
		newDead,
	} = extractStats(country.value, godViewData);

	return (
		<div id="infoPanel" className="mainPanel">
			<span id="infoPanel-title">
				{country.value + " "} <Flag code={country.ISO_A2} height="20" />
			</span>
			<DateSlider lastDate={lastDate} onDateChange={onDateChange} />
			<div id="infoPanel-stats">
				<div>
					<Stat
						number={confirmed}
						badge={newConfirmed}
						name="Confirmed Cases"
					/>
					<Stat
						number={active}
						badge={newActive}
						name="Active Cases"
					/>
				</div>
				<div>
					<Stat number={dead} badge={newDead} name="Deaths" />
					<Stat
						number={recovered}
						badge={newRecovered}
						name="Recoveries"
					/>
				</div>
				{loading && <Loader />}
			</div>
		</div>
	);
};

export default Info;
