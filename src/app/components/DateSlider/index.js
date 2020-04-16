import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import "./styles.sass";

const DateSlider = () => {
	let [date, setDate] = useState(31);
	// useEffect((_) => {
	// 	setInterval((_) => {
	// 		date === 15 ? setDate(31) : setDate(15);
	// 	}, 3000);
	// });

	let changeHandler = (val) => {
		setDate(val);
		console.log(val)
	};
	let forward = _=>{
		setDate(++date)
	};
	let backward = _=>{
		setDate(--date)
	};
	return (
		<div id="dateSlider">
			<button className="sliderBtn" onClick={backward}>-</button>
			<Slider
				value={date}
				min={1}
				max={31}
				onChange={changeHandler}
				tipFormatter={(val) => `${val}/04/2020`}
			/>

			<button className="sliderBtn" onClick={forward}>+</button>
		</div>
	);
};

export default DateSlider;
