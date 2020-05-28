import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "react-feather";
import { Slider } from "antd";
import "./styles.sass";

let firstDateMs = new Date("2020-01-22").getTime();

// return the number of days between two date ( first & last included )
function dateToTicks(lastDate) {
	// let lastDateISOString = lastDate.split("/").reverse().join("-");
	let lastDateMs = new Date(lastDate).getTime();

	let dif = Math.abs(lastDateMs - firstDateMs);

	return 1 + Math.round(dif / 1000 / 60 / 60 / 24);
}

// interpolate the current slider tick to its corresponding date
function tickToDate(tick) {
	let tickMs = parseInt(firstDateMs) + (tick - 1) * 24 * 60 * 60 * 1000;
	let date = new Date(tickMs);
	return date.toDateString();
}

// interpolate the current slider tick to its corresponding date in a format that server understands
function tickToDateServerFomat(tick) {
	let tickMs = parseInt(firstDateMs) + (tick - 1) * 24 * 60 * 60 * 1000;
	let date = new Date(tickMs);

	return date.toISOString().slice(0, 10);
}

const DateSlider = ({ lastDate, onDateChange }) => {
	let ticksNum = dateToTicks(lastDate);
	let [tick, setTick] = useState(ticksNum);
	let updateDate = (tick) => {
		setTick(tick);
		onDateChange(tickToDateServerFomat(tick));
	};

	let lastDateReceived = useRef(false);
	useEffect(() => {
		if (!lastDateReceived.current && lastDate) {
			// console.log("Info -> lastDate", lastDate);
			onDateChange(lastDate);
			setTick(ticksNum);
			lastDateReceived.current = true;
		}
	}, [lastDate]);

	return (
		<div id="dateSlider">
			<div id="dateSlider-cpanel">
				<ArrowLeft
					color={tick > 1 ? "#141414" : "#d6d6da"}
					size={20}
					onClick={(_) => {
						if (tick > 1) updateDate(--tick);
					}}
				/>
				<span>{tickToDate(tick)}</span>
				<ArrowRight
					color={tick < ticksNum ? "#141414" : "#d6d6da"}
					size={20}
					onClick={(_) => {
						if (tick < ticksNum) updateDate(++tick);
					}}
				/>
			</div>
			<div id="dateSlider-slider">
				<Calendar color="#FF6F61" size={20} />
				<Slider
					value={tick}
					min={1}
					max={ticksNum}
					onChange={(tick) => updateDate(tick)}
					tipFormatter={(tick) => tickToDate(tick)}
				/>
			</div>
		</div>
	);
};

export default DateSlider;
