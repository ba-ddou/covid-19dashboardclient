import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "react-feather";
import { Slider } from "antd";
import "./styles.sass";

let firstDateMs = "1582239600000"; // 21/01/2020;

function dateToTicks(lastDate) {
	let lastDateEle = lastDate.split("/");
	let lastDateMs = new Date(
		lastDateEle[2],
		lastDateEle[1],
		lastDateEle[0]
	).getTime();

	let dif = Math.abs(lastDateMs - firstDateMs);

	return 1 + Math.round(dif / 1000 / 60 / 60 / 24);
}

function tickToDate(tick) {
	let tickMs = parseInt(firstDateMs) + (tick - 1) * 24 * 60 * 60 * 1000;
	let date = new Date(tickMs);
	return date.toString().split(" ").splice(0, 4).join(" ");
}

const DateSlider = ({ lastDate }) => {
	let ticksNum = dateToTicks(lastDate);
	let [tick, setTick] = useState(ticksNum);
	return (
		<div id="dateSlider">
			<div id="dateSlider-cpanel">
				<ArrowLeft
					color={tick > 1 ? "#141414" : "#d6d6da"}
					size={20}
					onClick={(_) => {
						if (tick > 1) setTick(--tick);
					}}
				/>
				<span>{tickToDate(tick)}</span>
				<ArrowRight
					color={tick < ticksNum ? "#141414" : "#d6d6da"}
					size={20}
					onClick={(_) => {
						if (tick < ticksNum) setTick(++tick);
					}}
				/>
			</div>
			<div id="dateSlider-slider">
				<Calendar color="#FF6F61" size={20} />
				<Slider
					value={tick}
					min={1}
					max={ticksNum}
					onChange={(tick) => setTick(tick)}
					tipFormatter={(tick) => tickToDate(tick)}
				/>
			</div>
		</div>
	);
};

export default DateSlider;
